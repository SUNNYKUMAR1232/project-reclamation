# Roles and Permissions

## User Section

### User Permissions

| Permission Name  | Description                            |
| ---------------- | -------------------------------------- |
| user.read.all    | Can read all user data                 |
| user.list.public | Can list/search all public accounts    |
| user.list.all    | Can list/search all user data          |
| user.write.self  | Can update/delete own account          |
| user.write.all   | Can create/update/delete all user data |
|                  |                                        |

### User Roles

| Role Name       | user.read.all | user.list.public | user.list.all | user.write.self | user.write.all |
| --------------- | ------------- | ---------------- | ------------- | --------------- | -------------- |
| user.basic      | N             | Y                | N             | Y               | N              |
| user.verified   | Y             | Y                | N             | Y               | N              |
| user.admin      | Y             | Y                | Y             | Y               | N              |
| user.superadmin | Y             | Y                | Y             | Y               | Y              |
|                 |               |                  |               |                 |                |

---

## Article Section

### Article Permissions

| Permission Name          | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| article.read.restricted  | Can read institute restricted articles                    |
| article.read.unpublished | Can read unpublished, archived or trashed articles        |
| article.read.admin       | Can read admin fields of an article                       |
| article.list.restricted  | Can list/search institue restricted articles              |
| article.list.unpublished | Can list/search unpublished, archived or trashed articles |
| article.write.new        | Can create a new article                                  |
| article.write.self       | Can update/delete own articles                            |
| article.write.all        | Can update/delete all articles                            |
|                          |                                                           |

### Article Roles

| Role Name        | article.read.restricted | article.read.unpublished | article.read.admin | article.list.restricted | article.list.unpublished | article.write.new | article.write.self | article.write.all |
| ---------------- | ----------------------- | ------------------------ | ------------------ | ----------------------- | ------------------------ | ----------------- | ------------------ | ----------------- |
| article.verified | Y                       | N                        | N                  | Y                       | N                        | N                 | N                  | N                 |
| article.pic      | Y                       | Y                        | N                  | Y                       | Y                        | N                 | N                  | N                 |
| article.team     | Y                       | Y                        | Y                  | Y                       | Y                        | N                 | Y                  | N                 |
| article.author   | Y                       | Y                        | Y                  | Y                       | Y                        | Y                 | Y                  | N                 |
| article.admin    | Y                       | Y                        | Y                  | Y                       | Y                        | Y                 | Y                  | Y                 |
|                  |                         |                          |                    |                         |                          |                   |                    |                   |

---

## Issue Section

### Issue Permissions

| Permission Name        | Description                        |
| ---------------------- | ---------------------------------- |
| issue.read.unpublished | Can read unpublished issues        |
| issue.list.unpublished | Can list/search unpublished issues |
| issue.write.new        | Can create a new issue             |
| issue.write.all        | Can update/delete all issues       |
|                        |                                    |

### Issue Roles

| Role Name   | issue.read.unpublished | issue.list.unpublished | issue.write.new | issue.write.all |
| ----------- | ---------------------- | ---------------------- | --------------- | --------------- |
| issue.team  | Y                      | Y                      | N               | N               |
| issue.admin | Y                      | Y                      | Y               | Y               |
|             |                        |                        |                 |                 |

---

## Squiggle Section

### Squiggle Permissions

| Permission Name    | Description               |
| ------------------ | ------------------------- |
| squiggle.write.new | Can create a new squiggle |
|                    |                           |

### Squiggle Roles

| Role Name      | squiggle.write.new |
| -------------- | ------------------ |
| squiggle.admin | Y                  |
|                |                    |

---

## Tag Section

### Tag Permissions

| Permission Name  | Description                          |
| ---------------- | ------------------------------------ |
| tag.read.admin   | Can read admin tags                  |
| tag.list.public  | Can list/search public tags          |
| tag.list.admin   | Can list/search admin tags           |
| tag.write.public | Can create/update/delete public tags |
| tag.write.admin  | Can create/update/delete admin tags  |
|                  |                                      |

### Tag Roles

| Role Name | tag.read.admin | tag.list.public | tag.list.admin | tag.write.public | tag.write.admin |
| --------- | -------------- | --------------- | -------------- | ---------------- | --------------- |
| tag.team  | Y              | Y               | N              | Y                | N               |
| tag.admin | Y              | Y               | Y              | Y                | Y               |
|           |                |                 |                |                  |                 |

---

### Live Section

### Live Permissions

| Permission Name | Description                |
| --------------- | -------------------------- |
| live.read.all   | Can read all live data     |
| live.write.all  | Can add/edit all live data |

### Live Roles

| Role Name       | live.read.all | live.write.all |
| --------------- | ------------- | -------------- |
| live.verified   | Y             | N              |
| live.superadmin | Y             | Y              |

### Media Section

### Media Permissions

| Permission Name  | Description                   |
| ---------------- | ----------------------------- |
| media.write.new  | Can add media data            |
| media.write.self | Can delete own media data     |
| media.write.all  | Can add/delete all media data |

### Media Roles

| Role Name   | media.write.new | media.write.self | media.write.all |
| ----------- | --------------- | ---------------- | --------------- |
| media.team  | Y               | Y                | N               |
| media.admin | Y               | Y                | Y               |
