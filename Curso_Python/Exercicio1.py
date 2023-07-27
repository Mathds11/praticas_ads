nome = input('Digite seu nome: ')
idade = input('Digite sua idade: ')

if nome and idade != '':
    print(f'\nSeu nome é: {nome}')
    print(f'Seu nome invertido é: {nome[::-1]}')
    if ' ' in nome:
        print(f'Seu nome contem espaço: Sim')
    else:
        print(f'Seu nome contem espaço: Não')
    print(f'Seu nome tem "{len(nome)}" letras')
    print(f'A primeira letra do seu nome é: {nome.upper()[0]}')
    print(f'A ultima letra do seu nome é: {nome.upper()[-1]}')
    print(f'Sua idade é: {idade}\n')
else:
    print('\nDespulpe, você deixou campos vazios')