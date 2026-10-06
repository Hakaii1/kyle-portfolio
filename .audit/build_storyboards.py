from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess
root=Path.cwd()
ffmpeg=Path(r'C:\Users\Kyle\AppData\Local\Temp\kg-media-tools\node_modules\ffmpeg-static\ffmpeg.exe')
for name in ['luvain','clairon','uvola']:
    dest=root/'.audit'/name
    dest.mkdir(exist_ok=True)
    subprocess.run([str(ffmpeg),'-hide_banner','-loglevel','error','-i',str(root/'public/assets/video-web/films'/f'ugc-{name}.mp4'),'-vf',r'select=not(mod(n\,90)),scale=270:-1','-fps_mode','vfr',str(dest/'frame-%03d.jpg')],check=True)
    frames=sorted(dest.glob('frame-*.jpg'))
    for start in range(0,len(frames),16):
        batch=frames[start:start+16]
        rows=(len(batch)+3)//4
        canvas=Image.new('RGB',(1080,520*rows),'#161616')
        d=ImageDraw.Draw(canvas)
        for i,p in enumerate(batch):
            f=Image.open(p)
            x=(i%4)*270; y=(i//4)*520
            d.text((x+8,y+5),f'{name} | {(start+i)*3:02d}s',fill='white')
            canvas.paste(f,(x,y+25))
        canvas.save(root/'.audit'/f'{name}-sample-{start//16+1}.jpg')
    print(name,len(frames))
