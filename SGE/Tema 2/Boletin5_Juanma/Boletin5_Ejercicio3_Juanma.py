import math
class Figura():

    def __init__(self,nombre):
        self.__nombre=nombre

    @property
    def nombre (self):
        return self.__nombre


    @nombre.setter
    def nombre (self,nombre):
        self.__nombre=nombre




class Cuadrado(Figura):

    def __init__(self,nombre,lado):
        super(Cuadrado, self).__init__(nombre)
        self.__lado=lado


    @property
    def lado (self):
        return self.__lado


    @lado.setter
    def nombre (self,lado):
        self.__lado=lado

    def areaCuadrado(self,lado):
        result = lado*lado
        return result



class Circulo(Figura):

    def __init__(self, nombre, radio):
        super(Circulo, self).__init__(nombre)
        self.__radio=radio


    @property
    def radio (self):
        return self.__radio


    @radio.setter
    def radio (self,radio):
        self.__radio=radio

    def areaCirculo(self,radio):
        result = math.pi*(radio**2)
        return  result



class Triangulo(Figura):

    def __init__(self, nombre, base,altura):
        super(Triangulo, self).__init__(nombre)
        self.__base=base
        self.__altura=altura


    @property
    def base (self):
        return self.__base


    @base.setter
    def base (self,base):
        self.__base=base



    @property
    def altura (self):
        return self.__altura


    @altura.setter
    def altura (self,altura):
        self.__altura=altura

    def areaTriangulo(self,base,altura):
        result = (base*altura)/2
        return result



