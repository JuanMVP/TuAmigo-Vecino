#Ejercicio1

for i in range(1, 26):
    print(i)
print('******************************************************')
#Ejercicio2
numero=1
while numero <=25:
    if numero%2 !=0:
        print(numero)
    numero+=1

print('******************************************************')
#Ejercicio3
num=40
while num <=60:
    if num%2 ==0:
        print(num)
    num+=1

#Ejercicio4
number=48
while number <=120:
    print(number)
    number+=4
print('******************************************************')

#Ejercicio5
numero=1
for i in range (1,51):
    resultado = numero+(i+1)
    i+=1
    numero+=1
    print(resultado)
print('******************************************************')
#Ejercicio6
listaNumeros = range(1,51)
sumaNumeros= sum(listaNumeros)
print (sumaNumeros)
print('******************************************************')
#Ejercicio7
numero1=1
numero2=1
while numero1 <=20:
    numero2*=numero1
    numero1+=1
    print(numero2)
print('******************************************************')
#Ejercicio8
numero1=50
numero2=0
while numero1 >=20:
    numero2+=numero1
    numero1-=2
    print(numero2)
print('******************************************************')
#Ejercicio9

numero1=100
numero2=0
while numero1 >=1:
    if numero1%2 !=0:
        print(numero1)
        numero2 += numero1
    numero1-=1
print(numero2)
print('******************************************************')
#Ejercicio10
numero = int(input('Escriba un número'))
if numero%2 == 0:
    print('Este número es par')
else:
    print('Este número es impar')
print('******************************************************')
#Ejercicio11
numero1=1
numero2=0
numero3=0
while numero1 <=100:
    print(numero1)
    if numero1%2 !=0:
        numero2+=numero1
    else :
        numero3+=numero1
    numero1+=1
print('total numeros impares '+ str(numero2))
print('total numeros pares ' + str(numero3))
print('******************************************************')
#Ejercicio12
cuentaPares = 0
cuenta=0
numero1 = 0
numero2 = 0
total = 0
input1 = int(input('Diga el primer número: '))
input2 = int(input('Diga el segundo número: '))
if input1>input2:
    numero1=input2
    numero2=input1
else:
    numero1=input1
    numero2=input2
while numero1<numero2:
    numero1+=1
    if numero1 == numero2:
        break
    cuenta+=1
    print(numero1)
    if numero1%2 == 0:
        cuentaPares +=1
        total +=numero1
print('entre'+ str(numero1)+'y'+ str(numero2)+' hay, '+str(cuenta) + str(cuentaPares)+'son pares, y su suma es'+str(total))
print('******************************************************')
#Ejercicio13
numero1=1
numero2=0
while numero1<100:
    if numero1%3 == 0:
        print(numero1)
        numero2+=1
    numero1+=1
print('Entre 1 y 100 hay '+ str(numero2)+ ' multiplos de 3')
print('******************************************************')
#Ejercicio14
numero1= 1
numero2 = int(input('Diga hasta que número quiere llegar: '))
numero3=0
total=0
while True:
    if 3*numero1 > numero2:
            break
    if (3*numero1)%2 ==0:
        print(3*numero1)
        numero3 +=1
        total += 3*numero1
    numero1 +=1
print('Entre 1 y '+ str(numero2)+', '+str(numero3)+' son multiplos de 2 y 3 y su suma total es: '+str(total))
print('******************************************************')
#Ejercicio15
numero1= int(input('Primer Número: '))
numero2= int(input('Segundo Numero: '))
numero3=10
suma1=0
suma2=0
if numero1>=numero2:
    while numero3<=50:
        suma1 +=numero3
        numero3 +=4
    print(suma1)
if numero1/numero2 <=30:
    suma2 =(numero1**2+numero2**2)
    print(suma2)
print('******************************************************')
#Ejercicio16
numero1= int(input(' Primer Número: '))
numero2=int(input(' Segundo Número: '))
numero3=int(input(' Tercer Número: '))
numero4=2
suma1=0
suma2=0
if numero1/numero2 > 30:
    suma1= numero1/numero3*numero2**3
    print(suma1)
if numero1/numero2<=30:
    while numero4 <=30:
        suma2 +=numero4**2
        numero4+=2
    print(suma2)













