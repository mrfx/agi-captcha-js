agiCaptcha.

Generates random text image (canvas) and hidden form input field with md5 hash value. 
See ./demo/demo.html

At the backend you should compare text entered by user with md5 from hidden field.
There is also additional hash added to text. The same hash should be added to text at backend.
See ./demo/backend.php

For more efficiency you can also generate hashes dynamically at server.
