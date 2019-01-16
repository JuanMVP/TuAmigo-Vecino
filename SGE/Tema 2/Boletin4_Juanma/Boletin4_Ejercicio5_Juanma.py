import datetime

now = datetime.datetime.now()

class Fecha():

    def __init__(self, dia, mes, anio):
        self.__dia = dia
        self.__mes = mes
        self.__anio = anio


    @property
    def dia(self):
        return self.__dia

    @dia.setter
    def dia(self,dia):
        self.__dia = dia

    @property
    def mes(self):
        return self.__mes

    @mes.setter
    def mes(self, mes):
        self.__mes = mes


    @property
    def anio(self):
        return self.__anio


    @anio.setter
    def year(self, anio):
        self.__anio = anio


    def leer(self, dia, mes, anio):
        print('Diga el dia entre 1 y 31')
        input(int(dia))
        print('Diga el mes entre 1 y 12')
        input(int(mes))
        print('Diga el año entre 1900 y 2050')
        input(int(anio))

        if dia <= 31 and dia >= 1 and mes <= 12 and mes >= 1 and anio <=2050 and anio >= 1900:
            return print(str(dia) + " / " + str(mes) + " / " + str(anio))



    def esBisiesto(self):
        anio=int(input('Diga el año'))
        if self.anio %4 ==0 and self.anio %400 ==0:
            print('El año es bisiesto')
        else:
            print('El año no es bisiesto')



    def diasMes(self,comprobar):
         if comprobar == 1 or comprobar == 3 or comprobar == 5 or comprobar == 7 or comprobar == 8 or comprobar == 10 or comprobar == 12:

            return print("Este mes tiene 31 días")
         elif comprobar == 4 or comprobar == 6 or comprobar == 9 or comprobar == 11:
             return print("Este mes tiene 30 días")

         else:
             return print("Febrero tiene 28 o 29 días , según si es bisiesto o no ")



    def validarFecha(self):
        if self.dia >= 1 and self.mes >= 1 and self.anio >=1900:
            if self.dia <=31 and self.mes <= 12 and self.anio <= 2050:
                return print("Esta Fecha es correcta ")




    def fechaCorta(self):
        return str(self.dia)+ " - " + str(self.mes)+ " - "+str(self.anio)


    def diasTranscurridos(self):
        aTrn = self.anio
        mTrn = self.mes
        dTrn = self.dia
        total = 0

        if dTrn < now.day:
            total = total + (now.day - dTrn)
            if mTrn < now.month:
                total = total + (now.month - mTrn) * 30
                if aTrn < now.year:
                    total = total + (now.year - aTrn) * 365

        return total


    def diaSemana(self):
         if self.dia == 0:
            print("Es domingo")
         elif self.dia == 1:
            print("Es Lunes")
         elif self.dia == 2:
            print("Es Martes")
         elif self.dia == 3:
            print("Es Miercoles")
         elif self.dia == 4:
            print("Es Jueves")
         elif self.dia == 5:
                print("Es Viernes")
         elif self.dia == 6:
            print("Es Sabado")


    def fechaLarga(self):
        pass


    def fechaTras(self,long):
        pass

    def diasEntre(self,fecha):
        pass

    def diaSiguiente(self):
         self.__dia = self.dia +1
         return self.dia

    def diaAnterior(self):
        self.__dia = self.dia - 1
        return self.dia

    def fechaIgualQue(self, other):
        if self.dia == other.dia and self.mes == other.mes and self.anio == other.anio:
            return print("Las fechas son iguales")


    def fechaMayorQue(self, other):
        if self.dia < other.dia and self.mes < other.mes and self.anio < other.anio:
            return print("La fecha introducida es mayor")


    def fechaIgualQue(self, other):
        if self.dia > other.dia and self.mes > other.mes and self.anio > other.anio:
            return print("La fecha introducida es menor")





