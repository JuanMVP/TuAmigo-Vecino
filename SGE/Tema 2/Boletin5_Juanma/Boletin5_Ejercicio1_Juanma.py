class NumeroFraccionario():
    def __init__(self,numerador, denominador=1):
        self.numerador=numerador
        self.denominador=denominador

    @property
    def numerador(self):
        return self.__numerador

    @numerador.setter
    def numerador(self, numerador):
        self.__numerador = numerador

    @property
    def denominador(self):
        return self.__denominador

    @denominador.setter
    def denominador(self, denominador):
        self.__denominador = denominador

    #def suma(self,NumeroFraccionario):
     #   return (numF1+numerador2)+"/"+(denominador1+denominador2)

    def __str__(self):
        return str(self.numerador)+"/"+str(self.denominador)


    def __add__(self, other):
        return NumeroFraccionario(self.denominador*other.numerador + other.denominador*self.numerador,self.denominador*other.denominador)


    def __sub__(self,other):
        return NumeroFraccionario(self.numerador-other.numerador, self.denominador-other.denominador)

    def __mul__(self, other):
        return NumeroFraccionario(self.numerador*other.numerador, self.denominador*other.denominador)

    def __floordiv__(self,other):
        return NumeroFraccionario(self.numerador*other.denominador,self.denominador*other.numerador )


    def __eq__(self):
        return NumeroFraccionario == NumeroFraccionario

    def __lt__(self):
        return NumeroFraccionario < NumeroFraccionario

    def __le__(self):
        return NumeroFraccionario <= NumeroFraccionario

    def __gt__(self):
        return NumeroFraccionario > NumeroFraccionario

    def __ge__(self):
        return NumeroFraccionario >= NumeroFraccionario

    def __cmp__(self,other):
         #return cmp((self.numerador, self.denominador), (other.numerador, other.denominador))
            pass
    
    def euclides(self,numerador, denominador):
        if denominador > numerador:
            if denominador % numerador == 0:
                return numerador
            else:
                return denominador % numerador, numerador
        else:
            if numerador % denominador == 0:
                return denominador
            else:
                return denominador, numerador % denominador

num1= NumeroFraccionario(2,3)
num2= NumeroFraccionario(2)


print(num1+num2)
print(num1-num2)
print(num1*num2)
#print(float(num1/num2))

