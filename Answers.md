- [ ] What is the purpose of using _sessions_?

> Sessions store authentication and potentially other information across requests, and even when a browser is closed if sotred as a cookie. On the server end sessions are a way of keeping and verifying requests are valid.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

> It one way encrypts and salts and hashes passwords so they cannot be decrypted and very difficult to hack/brute force if passwords are not bad.

- [ ] What does bcrypt do to slow down attackers?

> Forces a login attempt to encrypt a password at the same level using the same secret to compare hashes on the server end. Depending on the level of hashing/salting it can take longer for the server to respond. Limiting the amount of times per second a hacker can try to guess passwords

- [ ] What are the three parts of the JSON Web Token?

> Header, Payload, Signature
