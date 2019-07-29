# joshbot

joshbot is a bot which sits in a soccer team GroupMe and performs administrative tasks such as taking attendance and giving compliments.

## Build / Deploy

```
$ export VERSION=<desired semver>
$ ./build.sh
$ ./deploy.sh
```

## Data Models

### Game
```
{
  time: RFC 3339 Timestamp
  opponent: String
  location: String
  yes: [String]
  no: [String]
  maybe: [String]
}
```
