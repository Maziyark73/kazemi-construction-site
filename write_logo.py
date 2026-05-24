import base64, os

data = """DATA_GOES_HERE"""

with open('/Users/maziyar/kazemi-construction-site/public/logo.png', 'wb') as f:
    f.write(base64.b64decode(data))
print('Logo written!')
