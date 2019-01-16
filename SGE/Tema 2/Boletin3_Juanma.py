from math import pi
#Ejercicio1
import switch as switch


def sumarLista (listaNumeros = []):
    total=0
    for i in listaNumeros:
        total = total +i
    return total
print(sumarLista([1,2,4,7,10]))
print('************************')

#Ejercicio2
def esPrimo(num1):
    if num1 < 1:
        return False
    elif num1 == 2:
        return True
    else:
        for i in range(2,num1):
            if num1 % i ==0:
                return False
        return True


print(esPrimo(7))
print('************************')

#Ejercicio3
def esBisiesto(fecha):
    if fecha %4 ==0 and fecha %100 !=0 or fecha %400 ==0:
        print('El año es bisiesto')
    else:
        print('El año no es bisiesto')


print(esBisiesto(2016))
print('************************')
#Ejercicio4
def areaCuadrado(lado):
    return lado**2

def areaCirculo(radio):
    return pi*radio**2

def areaTriangulo(base,altura):
    return base*altura/2


print('CALCULADORA DE ÁREAS')
print('=======================')
print('Diga de que figura quiere calcular el área')
print('1. Cuadrado', end=' - ')
print('2. Circulo', end=' - ')
print('3. Triangulo', end=' - ')
print('0. Salir')

lado =0
base=0
altura=0
radio=0
opc=input('Seleccione su opción')

if opc =='1':
    lado=int(input('Diga el lado del cuadrado'))
    print(areaCuadrado(lado) + ' es el área del cuadrado')
elif opc =='2':
    radio=int(input('Diga el radio del circulo'))
    print(areaCirculo(radio) + ' es el área del circulo')
elif opc == '3':
        base=int(input('Diga la base del triangulo'))
        altura=int(input('Diga la altura del triangulo'))
        print(areaTriangulo(base,altura) + ' es el área del triangulo')
elif opc =='0':
    print('Gracias por usar el programa')
else:
    print('opcion incorrecta')
print('************************')

#Ejercicio5

def devolverCambio(entregado,precio):
    return entregado-precio


print('MAQUINA DE REFRESCOS')
precio=int(input('Diga el precio del refresco'))
entregado=int(input('Diga la cantidad entregada'))

print(devolverCambio(entregado,precio))
print('************************')

#Ejercicio6
print('ENCUESTA DE COLORES')
print('¿Cual es su color favorito?')
print('1. Azul', end=' - ')
print('2. Verde', end=' - ')
print('3. Amarillo', end=' - ')
print('4. Rosa')
print('5. Morado')
eleccion=input('Introduzca el número de su color favorito o -1 para salir')

color1=0
color2=0
color3=0
color4=0
color5=0

while eleccion != '-1':

    if eleccion == '1':
        color1+=1

    elif eleccion == '2':
        color2+=1

    elif eleccion == '3':
        color3+=1

    elif eleccion == '4':
        color4+=1

    elif eleccion == '5':
        color5+=1


colores=[color1,color2,color3,color4,color5]
colores.sort()
print('los resultados son' + str(colores))
print('Gracias por hacer la encuesta')








