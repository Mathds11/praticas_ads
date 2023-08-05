import os

chave = 'ARROZ'
quant_letra = ''
letra = ''
chave_letra = ''
acertos_letra = ''
j = 0

print('Jogo da paravra secreta.\nDigite uma palavra usando somente letras')



while letra != chave:
    letra = input('\nDigita a palavra secreta: ').upper()
    if len(letra) > 1:
        print(f'Digite apenas uma letra por vez\n')
        continue
    elif quant_letra in chave:
        acertos_letra += letra
        palavra_formada = ''
        for chave_letra in chave:
            if chave_letra in acertos_letra:
                palavra_formada += chave_letra
            else:
                palavra_formada += '*'                
                
    print(f'Palavra formada: {palavra_formada}')
    
    while palavra_formada != chave:
        j += 1
        break

    if palavra_formada == chave:
        os.system('cls')
        print('Parabéns!!! Voce acertou.')
        print(f'Palavra escontrada com sucesso com {j} tentativas\n')
        break




