imp = input('Input : ')
words = 0
whitespace = 0 
alpha = 0

for i in imp : 
    if i == ' ':
        words += 1
        whitespace += 1
    elif i == '.' or i == '?' or i == '!' :
        words += 1
    else:
        alpha += 1

print('There are', words, ' words,', whitespace , 'whitespaces and ', alpha, 'alphanumeric characters')