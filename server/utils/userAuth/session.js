const { admin } = require('../../config/firebase');
const UserAuth = require('.');
const { APIError } = require('../exception');

const UserSession = {
  /**
   * @description Checks if user's session is active and valid
   * @function
   *
   * @param {session.Session} session
   * @param {String} jwt
   * @returns {Boolean}
   */
  valid: (session, jwt) =>
    !session ||
    !jwt ||
    !session.auth ||
    !session.auth.jwt ||
    !session.auth.exp ||
    !session.auth.uid ||
    session.auth.jwt !== jwt ||
    session.auth.exp <= Date.now() / 1000
      ? false
      : true,

  /**
   * @description Creates a session for a user and authenticates the user
   * @function
   * @async
   *
   * @param {session.Session} session
   * @param {String} jwt
   * @param {auth} _auth Firebase Authentication Library
   * @returns {Object | GraphQLError} decodedToken
   */
  start: async (session, jwt, _auth = admin?.auth()) => {
    try {
      const _decodedToken = await UserAuth.authenticate(jwt, _auth);
      const { uid, exp, roles, mid } = _decodedToken;
      session.auth = {
        uid,
        mid,
        jwt,
        exp,
        roles,
        decodedToken: _decodedToken,
      };
      await session.save();
      return _decodedToken;
    } catch (error) {
      throw APIError(null, error, {
        reason: 'The server was unable to initialize a session.',
      });
    }
  },

  /**
   * @description Ends the running session
   * @function
   * @async
   *
   * @param {session.Session} session
   * @param {String} jwt
   * @returns {NULL | GraphQLError}
   */
  end: async (session, jwt) => {
    try {
      if (UserSession.valid(session, jwt)) {
        await session.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw APIError(null, error, { reason: "The server was unable to terminate the user's session." });
    }
  },
};

module.exports = UserSession;
