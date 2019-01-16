class Linea():
    puntoA= 0.0;
    puntoB=0.0;

    def __init__(self, puntoA, puntoB):
        self.puntoA=puntoA;
        self.puntoB=puntoB;


    @property
    def puntoA(self):
        return self.__puntoA

    @puntoA.setter
    def puntoA(self,puntoA):
        self.__puntoA=puntoA


    @property
    def puntoB(self):
        return self.__puntoB

    @puntoB.setter
    def puntoB(self,puntoB):
        self.puntoB=puntoB



    def mueveDerecha(self,double):
        if double >= 0:
            self.__puntoA= double + self.puntoA


    def mueveIzquierda(self,double):
        if double <= 0:
            self.__puntoA= double + self.puntoA


    def mueveArriba(self,double):
        if double >= 0:
            self.__puntoB= double + self.puntoB


    def mueveAbajo(self,double):
        if double <= 0:
            self.__puntoB= double + self.puntoB


    def __str__(self):
        return "[("+ str(self.puntoA) + " , "+ str(self.puntoB) + "]"
