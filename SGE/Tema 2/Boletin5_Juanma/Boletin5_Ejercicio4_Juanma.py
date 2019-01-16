class Direccion():

    def __init__(self, calle, ciudad, codPostal , provincia):
        self.__calle = calle
        self.__ciudad = ciudad
        self.__codPostal = codPostal
        self.__provincia = provincia

    @property
    def calle(self):
        return self.__calle

    @calle.setter
    def calle(self, calle):
        self.__calle = calle

    @property
    def ciudad(self):
        return self.__ciudad

    @ciudad.setter
    def ciudad(self,ciudad):
        self.__ciudad = ciudad

    @property
    def codPostal(self):
        return self.__codPostal

    @codPostal.setter
    def codPostal(self, codPostal):
        self.__codPostal = codPostal

    @property
    def provincia(self):
        return self.__provincia

    @provincia.setter
    def provincia(self, provincia):
        self.__provincia = provincia

    def __str__(self):
        return self.calle + ' +. CP: ' + self.codPostal + ' Ciudad: ' + self.ciudad + ' Provincia: ' + self.provincia


class Persona():

    def __init__(self, nombre, apellidos, dni, direccion):
        self.__nombre = nombre
        self.__apellidos = apellidos
        self.__dni = dni
        self.__direccion = direccion

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def apellidos(self):
        return self.__apellidos

    @apellidos.setter
    def apellidos(self, apellidos):
        self.__apellidos = apellidos

    @property
    def dni(self):
        return self.__dni

    @dni.setter
    def dni(self, dni):
        self.__dni =dni

    @property
    def direccion(self):
        return self.__direccion

    @direccion.setter
    def direccion(self, dir):
        self.__direccion = dir


    def __str__(self):
        return self.nombre + ' , ' + self.apellidos + ' , ' + self.dni + ' - ' + str(self.direccion)

class Estudiante(Persona):

    def __init__(self, nombre, apellidos, dni, direccion , id_estudiante):
        super(Estudiante, self).__init__(nombre, apellidos, dni, direccion)
        self.__id_estudiante = id_estudiante

    @property
    def id_estudiante(self):
        return self.__id_estudiante


    @id_estudiante.setter
    def id_estudiante(self, id):
        self.__id_estudiante = id

    def __str__(self):
        return  'ID: ' + str(self.id_estudiante) +  ' + ' + super(Estudiante, self).__str__()


class Profesor(Persona):


    def __init__(self, nombre, apellidos, dni, direccion , numDespacho):
        super(Profesor, self).__init__(nombre, apellidos, dni, direccion)
        self.__numDespacho = numDespacho


    @property
    def numDespacho(self):
        return self.__numDespacho


    @numDespacho.setter
    def numDespacho(self, num):
        self.__numDespacho = num

    def __str__(self):
        return  'Num: ' + str(self.numDespacho) +  ' + ' + super(Profesor, self).__str__()

if __name__ == "__main__":

    print("Persona")
    persona = Persona("Pepe", "Perez Perez", "12345678N", Direccion("Rue del percebe 13", "Ubeda", "43400", "Jaen"))
    print(persona)

    print("Profesores")
    profesor = Profesor("Luismi", "Lopez Magaña" , "23456789B", Direccion("Condes de bustillo","Sevilla" , "41001", "Sevilla" ), "2")
    print(profesor)

    profesor2 = Profesor("Miguel", "Campos" , "23456789B", Direccion("Condes de bustillo","Sevilla" , "41001", "Sevilla" ), "3")
    print(profesor2)

    print("Array Profesores")
    lista_profesores = [profesor, profesor2]

    for profe in lista_profesores:
        print(profe)

    print("Estudiante suelto")
    estudiante = Estudiante("David", "Matamoros" ,"34567891C" , Direccion("Triana", "Triana", "41006", "Sevilla"), "6")
    print(estudiante)


