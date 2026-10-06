from pathlib import Path
import subprocess
root=Path.cwd(); ffmpeg=Path(r'C:\Users\Kyle\AppData\Local\Temp\kg-media-tools\node_modules\ffmpeg-static\ffmpeg.exe')
for name,times in {'luvain':[8.5,39,54,66,75,90.5],'clairon':[74,76,77,77.6],'uvola':[1,77,81,90,102]}.items():
    for t in times:
        subprocess.run([str(ffmpeg),'-hide_banner','-loglevel','error','-ss',str(t),'-i',str(root/'public/assets/video-web/films'/f'ugc-{name}.mp4'),'-frames:v','1',str(root/'.audit'/f'{name}-{t}s.png')],check=True)
