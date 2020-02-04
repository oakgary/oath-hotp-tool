# oath-hotp-tool

Manage HMAC-based One-time Passwords like Googles Authenticator App (F2A) but within the terminal of your choice.

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
