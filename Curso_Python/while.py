# linha = 5
# coluna = 5

# n = 1
# while n <= linha:
#     x = 1
#     print()
#     print(f'{n}ª linha: ', end='')
#     while x <= coluna:
#         print( x, end='')
#         x += 1
#     n += 1


# print('\nFim')

nome = 'Matheus'

n = 0
novo_nome = ''
while n < len(nome):
    novo_nome += f'*{nome[n]}'
    n += 1


novo_nome += '*'
print(novo_nome)