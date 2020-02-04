<h1 align="center">oath-hotp-tool</h1>

<br>
<br>

<p align="center">
<b>Manage HMAC-based One-time Passwords like Googles Authenticator App (F2A).</b><br>
<sub>within the terminal of your choice</sub>
</p>

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/oakgary/oath-hotp-tool/master/media/introduction.gif" alt="Introduction" width="750"><br>
</p>

<br>

<p align="center">
<b>Your master password is hashed as 512bytes based on a random 128byte salt and sha512 digest.</b><br>
<b>Your secrets are encrypted based on your master password, a random 16byte iv and sha256 digest.</b><br>
<sub>and stored in your config.json</sub>
</p>

<br>

## Setup

### Preparation

1. **[Download](https://github.com/oakgary/oath-hotp-tool/archive/master.zip) and extract oath-hotp-tool**
2. **`npm install`**

### Configuration

Select if you want your OTPs to be copied to your clipboard or just logged into the terminal.

* config.json 
```
{
    "shouldCopyToClipboard": true
}
```

## Credits
Thanks to Rajat for his [writeup](https://hackernoon.com/how-to-implement-google-authenticator-two-factor-auth-in-javascript-091wy3vh3) on the algorithms used in Googles Authenticator App.

## License
[MIT](https://choosealicense.com/licenses/mit/)
