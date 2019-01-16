class Electrodomestico():
    def __init__(self,precio_base,peso ,color='blanco',consumo_energetico='F'):
        self.__precio_base=precio_base
        self.__peso=peso
        self.__color=color
        self.__consumo_energetico=consumo_energetico


    @property
    def precio_base(self):
        return self.__precio_base

    @precio_base.setter
    def precio_base(self,precio_base):
        self.__precio_base=precio_base

    @property
    def color(self):
        return self.__color

    @color.setter
    def color(self,color):
        self.__color=color

    @property
    def peso(self):
        return self.__peso

    @peso.setter
    def peso(self,peso):
        self.__peso=peso

    @property
    def consumo_energetico(self):
        return self.__consumo_energetico

    @consumo_energetico.setter
    def consumo_energetico(self,consumo_energetico):
        self.__consumo_energetico=consumo_energetico



    def comprobar_consumo_electrico(self,letra):
        if letra in range('A'-'F'):
            return letra


    def precio_final(self):
        if self.consumo_energetico == 'F':
            result = self.precio_base+10
            return result
        elif self.consumo_energetico == 'E':
            result = self.precio_base+30
            return result

        elif self.consumo_energetico == 'D' and self.peso > 80:
            result = self.precio_base+50+100
            return result
        elif self.consumo_energetico == 'C' and self.peso >= 50 and self.peso <80:
            result = self.precio_base+60+80
            return result

        elif self.consumo_energetico == 'B' and self.peso >= 20 and self.peso <50:
            result = self.precio_base+80+50
            return result

        elif self.consumo_energetico == 'A' and self.peso >= 0 and self.peso <20:
            result = self.precio_base+100+10
            return result


class Lavadora(Electrodomestico):

    def __init__(self,precio_base,peso,color,consumo_energetico,carga = 5):
        super(Lavadora, self).__init__(precio_base,peso,color,consumo_energetico)
        self.__carga=carga


    @property
    def carga(self):
        return self.__carga

    @carga.setter
    def carga(self,carga):
        self.__carga=carga


    def __str__(self):
        return super(Lavadora, self).__str__() + str(self.carga)


class LavadoraIndustrial(Lavadora):

    def __init__(self,precio_base,peso,color,consumo_energetico, carga):
        super(LavadoraIndustrial, self).__init__(precio_base,peso,color,consumo_energetico,carga)


    def comprobarLavadoraIndustrial(self):
        if self.carga < 15 or self.carga > 50:
            return "Este tipo de lavadora no es industrial"



    def precio_final(self):
        if self.carga > 30:
            result = super(LavadoraIndustrial, self).precio_final()+50
            return result




if __name__ == '__main__':
    pass


