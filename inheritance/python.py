class Animal:
    def __init__(self, name):
        self.speed = 0
        self.name = name
    def run(self, speed):
        self.speed += speed
        print('{} runs with speed {}.'.format(self.name, self.speed))
    def stop(self):
        self.speed = 0
        print('{} stands.still.'.format(self.name))

class Rabbit(Animal):
    def jump(self):
        print('{} jump'.format(self.name))

rabbit = Rabbit('White Rabbit')
rabbit.run(10)
rabbit.jump()
rabbit.stop()
