class Cafetera():




     def __init__(self,capacidadActual, capacidadMaxima):
            self.capacidadActual=capacidadActual
            self.capacidadMaxima=capacidadMaxima



     @property
     def capacidadMaxima(self):
         return self.__capacidadMaxima

     @capacidadMaxima.setter
     def capacidadMaxima(self,capacidadMaxima):
         self.__capacidadMaxima=capacidadMaxima



     @property
     def capacidadActual(self):
         return self.capacidadActual

     @capacidadActual.setter
     def capacidadActual(self,capacidadActual):
         self.capacidadActual=capacidadActual



     def llenarCafetera(self):
         self.capacidadActual=self.capacidadMaxima


     def servirTaza(self,cantidad):
         if(cantidad>=self.capacidadActual):
             result = self.capacidadActual - cantidad
             return ('La taza ha sido servida, la cantidad actual es: '+ result)
         else:
             return ('No había café suficiente, se ha servido lo que quedaba, llena la cafetera')


     def vaciarCafetera(self):
         result= self.capacidadActual=0
         return ('La cantidad de la cafetera es: ' + result)

     def agregarCafe(self,cantidad):
         result = self.capacidadActual+cantidad
         return ('Café agregado, su cantidad es: '+ result)









