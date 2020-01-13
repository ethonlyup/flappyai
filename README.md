# Flappyai


Install python 3+, pip 19.2.3.

Make sure to run the following line or neat will not work with this code.

```pip install neat=0.92```

Once you have all the modules installed, just run 
```python flappyai.py```
The game should start and you'll see the birds progressing through generations

If you're interested in changing population sizes to get more better results, faster. Change the
```pop_size``` parameter in config-feedforward.txt

Also, if you'd like to see the bird break the game entirely, on line 266 remove the OR statement including the conditional that comes after that.

```if bird.y + bird.img.get_height() >= 730 or bird.y < 0:```
should be
```if bird.y + bird.img.get_height() >= 730:```
If you want your bird to hack the game.

This was created using ```Tech with tim```'s guide on youtube, you should chceck him out!

