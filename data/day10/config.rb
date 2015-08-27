# Compass 설정 참고자료
# http://compass-style.org/help/documentation/configuration-reference/

require 'compass/import-once/activate'
# Sass Add-on 호출
require 'bourbon'

# 프로젝트 디렉토리 설정
http_path       = "/"
css_dir         = "css"
sass_dir        = "sass"
images_dir      = "images"
javascripts_dir = "js"
fonts_dir       = 'fonts'

# 기본 언어 인코딩 설정
# Windows 사용자에게 주로 발생하는 오류(언어 인코딩: CP949)
Encoding.default_external = "utf-8"

# 코드 출력 스타일 방식 설정
# :expanded
# :nested
# :compact
# :compressed
output_style = :expanded

# 상대 경로를 사용할 것인지 설정
# relative_assets = true

# Sass -> CSS 컴파일 디버깅 주석 유무 설정
line_comments = false


# Sass 또는 Scss 문법 우선 적용 설정 유무
preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
