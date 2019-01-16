class Rectangulo():
    def _init_(self, base, altura):
        self.base = base
        self.altura = altura

        @property
        def base(self):
            return self.__base

        @base.setter
        def base(self, base):
            self.__base = base

        @property
        def altura(self):
            return self.__altura

        @altura.setter
        def altura(self, altura):
            self.__altura = altura

    def superficie(self):
        return self.base*self.altura

    def _str_(self):
        """Mostrar el rectángulo"""
        return "Base: " +str(self.base) + " , Altura: " + str(self.altura)

rec = Rectangulo(4,8)
print(rec)

print(rec.superficie())
