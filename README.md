peerflix-server (REST api only)
===============

## REST API

See [REST.md](REST.md)

## Configuration

You can configure the application using `~/.config/peerflix-server/config.json` file (doesn't exist by default).
The [options](https://github.com/mafintosh/torrent-stream#full-api) are passed to all torrent-stream instances.
Here's an example that overrides the defaults:

```json
{
  "connections": 50,
  "tmp": "/mnt/torrents"
}
```

You can also change the default port by setting `PORT` environment variable:

```sh
PORT=1234 peerflix-server

# or on windows
SET PORT=1234
peerflix-server
```

The application stores its current state (list of torrents) in `~/.config/peerflix-server/torrents.json`

## Daemon

If you want to run peerflix-server as a daemon, you can do it using [forever](https://github.com/foreverjs/forever):

```sh
npm install -g forever
```

```sh
forever start $(which peerflix-server)
```

You might also want to enable logging -- see the [docs](https://github.com/foreverjs/forever#command-line-usage).

## FAQ

[How do I add password protection?](https://github.com/asapach/peerflix-server/wiki/How-to-put-a-password-on-peerflix-server)

## Development

See [Development.md](Development.md)
