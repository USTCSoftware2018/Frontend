# 接口使用文档

## 用户类

### Login
### 失败
**用户名密码空**
```json
{
    "message": {
        "password": [
            "This field may not be blank."
        ],
        "username": [
            "This field may not be blank."
        ]
    },
    "success": false,
    "data": null
}
```
**用户名密码错误**
```json
{
    "message": {
        "non_field_errors": [
            "Username or password is incorrect."
        ]
    },
    "success": false,
    "data": null
}
```
**用户名不为空密码空**
```json
{
    "message": {
        "password": [
            "This field may not be blank."
        ]
    },
    "success": false,
    "data": null
}
```
### 成功
```json
{
    "message": "OK!",
    "success": true,
    "data": {
        "id": 1,
        "last_login": "2018-09-13T18:20:58.513437+08:00",
        "username": "test",
        "actualname": "",
        "organization": "",
        "email": "test@test.com",
        "avatar_url": "https://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=328&r=g&d=identicon",
        "address": "",
        "site_url": "",
        "description": ""
    }
}
```
## Register
### 失败
```json

​```# 接口使用文档

## 用户类

### Login
### 失败
**用户名密码空**
​```json
{
    "message": {
        "password": [
            "This field may not be blank."
        ],
        "username": [
            "This field may not be blank."
        ]
    },
    "success": false,
    "data": null
}
```
**用户名密码错误**
```json
{
    "message": {
        "non_field_errors": [
            "Username or password is incorrect."
        ]
    },
    "success": false,
    "data": null
}
```
**用户名不为空密码空**
```json
{
    "message": {
        "password": [
            "This field may not be blank."
        ]
    },
    "success": false,
    "data": null
}
```
### 成功
```json
{
    "message": "OK!",
    "success": true,
    "data": {
        "id": 1,
        "last_login": "2018-09-13T18:20:58.513437+08:00",
        "username": "test",
        "actualname": "",
        "organization": "",
        "email": "test@test.com",
        "avatar_url": "https://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=328&r=g&d=identicon",
        "address": "",
        "site_url": "",
        "description": ""
    }
}
```
## Register
### 失败
```json

```