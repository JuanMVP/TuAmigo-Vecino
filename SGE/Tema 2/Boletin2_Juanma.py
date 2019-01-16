#Ejercicio1
divisor = int(input('diga el divisor:'))
dividendo = int(input('diga el dividendo: '))
if dividendo % divisor == 0:
    print('La división es exacta, su cociente es: ' + str(dividendo//divisor))
else:
    print('La división no es exacta, su cociente es: ' + str(dividendo//divisor)+ ' y su resto es: ' + str(dividendo%divisor))

print('**********************************')
#Ejercicio2
numero1 = int(input('Diga el primer número: '))
numero2 = int(input('Diga el segundo número: '))
if numero1 < numero2:
    print('El número ' + str(numero1) + ' es menor que el número '+ str(numero2))
elif numero2>numero1:
    print('El número '+ str(numero2)+ ' es mayor que el número ' + str(numero1))
else:
    print('Los números son iguales')

print('**********************************')
#Ejercicio3
fechaActual= int(input('diga el primer año '))
fecha2= int(input('diga el segundo año'))

if fechaActual<fecha2:
    print('La fecha actual es: ' +str(fechaActual) + 'y para llegar al año: '+str(fecha2)+' queda '+str(fecha2-fechaActual)+ 'años')
elif fechaActual>fecha2:
    print('La fecha actual es: '+ str(fechaActual)+'y han pasado'+ str(fechaActual-fecha2)+' años desde el año: '+str(fecha2))
else:
    print('Los dos años son iguales')

print('**********************************')
#Ejercicio4
numero1 = int(input('Diga el primer número: '))
numero2 = int(input('Diga el segundo número: '))
if numero1>numero2 and numero1 % numero2 !=0:
    print('El número: '+str(numero1)+' no es multiplo del '+str(numero2))
elif numero1>numero2 and numero1 % numero2 ==0:
    print('El número: '+str(numero1)+'  es multiplo del '+str(numero2))
elif numero2>numero1 and numero2 % numero1 !=0:
    print('El número: '+str(numero2)+' no es multiplo del '+str(numero1))
else:
    print('El número: '+str(numero2)+'  es multiplo del '+str(numero1))
print('**********************************')

#Ejercicio5
numero1 = int(input('Diga el segundo número: '))
numero2 = int(input('Diga el segundo número: '))
numero3 = int(input('Diga el segundo número: '))
if numero1 == numero2 == numero3:
    print('Los 3 números son iguales')
elif numero1==numero2 != numero3 or numero1 != numero2 == numero3 or numero1==numero3 != numero2 :
    print('Solo hay dos números iguales')

else:
    print('Los 3 números son distintos')

print('**********************************')

#Ejercicio6
fecha=int(input('Diga el año'))
if fecha %4 ==0 and fecha %400 ==0:
    print('El año es bisiesto')
else:
    print('El año no es bisiesto')
print('**********************************')
#Ejercicio7
numero1= float(input('Introduzca el primer coeficiente: '))
numero2= float(input('Introduzca el segundo coeficiente: '))
if numero1==numero2==0:
    print('Todos los números sirven como solución')
elif numero1 == 0:
    print('La ecuación no tiene solución')
else:
    print('La solución es: '+ str(-numero2/numero1))

print('**********************************')

#Ejercicio8
numero1= float(input('Introduzca el primer coeficiente: '))
numero2= float(input('Introduzca el segundo coeficiente: '))
numero3= float(input('Introduzca el tercer coeficiente: '))
total=  numero2*numero2 - 4*numero1*numero3
if numero1 ==numero2 ==numero3 ==0:
    print('Todos los numeros sirven como solución')
elif numero1 ==numero2 ==0:
    print('No hay solución')
elif numero1 ==0:
    print('Una Solucion: '+ str(-numero3/numero2))
elif total < 0:
    print('No hay solución real')
elif total ==0:
    print('tiene una solución'+ str(-numero2(2*numero1)))
else:
    print('Dos soluciones'+ str({(-numero2 - total**0.5)/(2*numero1)})+ 'y' + str({(-numero2 + total**0.5)/(2*numero1)}))
print('**********************************')
#Ejercicio9
print('Elija una figura')
print('1) Triangulo', end=" ")
print('2) Circulo')
respuesta= input('seleccione 1 para triangulo, 2 para circulo')
if(respuesta=='1'):
    b=float(input('diga la base del triangulo'))
    alt=float(input('diga la altura del triangulo'))
    print('el área del triangulo es: '+ str(b*alt/2))
else:
    pi=3.141592
    rad=float(input('diga el radio del circulo'))
    print('el área del circulo es: ' +str(pi*rad**2))
#Ejercicio10
cent =int(input('Diga los centimetros a convertir'))


m= cent % 100000 //100
km= cent//100000
rest = cent % 100
print('centimetros: '+ str(cent))
print('metros: '+ str(m))
print('Kilometros: '+ str(km))










