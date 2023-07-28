"""
Faça um programa que peça ao usuário para digitar um número inteiro,
informe se este número é par ou ímpar. Caso o usuário não digite um número
inteiro, informe que não é um número inteiro.
"""
try:
    num = input('Digite um numero: ')
    num_int = int(num)

    if (num_int % 2) == 0:
        print(f'Numero {num_int} é PAR\n')
    else:
        print(f'Numero {num_int} é IMPAR\n')
except:
    print('Informe que não é um número inteiro\n')


"""
Faça um programa que pergunte a hora ao usuário e, baseando-se no horário 
descrito, exiba a saudação apropriada. Ex. 
Bom dia 0-11, Boa tarde 12-17 e Boa noite 18-23.
"""
try:
    horario = input('Que horas são? \n')
    horario_int = int(horario)

    if horario_int >= 0 and horario_int <= 11:
        print('Bom dia!\n')
    elif horario_int >= 12 and horario_int <= 17:
        print('Boa tarde!\n')
    elif horario_int >= 18 and horario_int <= 23:
        print('Boa noite!\n')
    else:
        print('Digite um horário válido!\n')
except:
    print('Digite somente números!\n')

"""
Faça um programa que peça o primeiro nome do usuário. Se o nome tiver 4 letras ou 
menos escreva "Seu nome é curto"; se tiver entre 5 e 6 letras, escreva 
"Seu nome é normal"; maior que 6 escreva "Seu nome é muito grande". 
"""
nome = input('Digite seu primeiro nome: ')

if len(nome) <= 0:
    print('Você não digitou um nome')
elif len(nome) <= 4:
    print("Seu nome é curto")
elif len(nome) >= 5 and len(nome) <= 6:
    print('Seu nome é normal')
else:
    print('Seu nome é muito grande')
