import os
def rename_pdf():
    os.chdir('G:\\Website\\tfugindia\\webdevlive-in\\src\\assets\\img\\team\\Untitled design\\img')
    i=1
    for file in os.listdir():
        src = file
        dst = f'team_{i}.jpg'
        os.rename(src,dst)
        print(f'File renamed with {dst}')
        i+=1
    
rename_pdf()