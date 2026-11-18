import { useState } from 'react'
import look1 from './assets/images/look1.png'
import look2 from './assets/images/look2.png'
import look3 from './assets/images/look3.png'
import look4 from './assets/images/look4.png'
import look5 from './assets/images/look5.png'

const products = [
  {
    name: 'LOOK 1',
    detail: '무드 있는 가을 톤온톤 룩',
    category: '아우터',
    link: 'https://dub.sh/musinsa-look1',
    image: look1,
    alt: '브라운 가죽 재킷과 니트, 팬츠를 매치한 남성 코디',
  },
  {
    name: 'LOOK 2',
    detail: '차분한 핏의 가을 데일리 룩',
    category: '상의',
    link: 'https://dub.sh/musinsa-look2',
    image: look2,
    alt: '차콜 코트와 니트, 팬츠를 매치한 남성 코디',
  },
  {
    name: 'LOOK 3',
    detail: '산뜻하고 내추럴한 데일리 셔츠 룩',
    category: '상의',
    link: 'https://dub.sh/musinsa-look3',
    image: look3,
    alt: '네이비 셔츠와 데님 팬츠를 매치한 남성 코디',
  },
  {
    name: 'LOOK 4',
    detail: '단정하고 세련된 셔츠 레이어드 룩',
    category: '아우터',
    link: 'https://dub.sh/musinsa-look4',
    image: look4,
    alt: '그레이 니트와 블랙 팬츠를 매치한 남성 코디',
  },
  {
    name: 'LOOK 5',
    detail: '편하게 걸치기 좋은 꾸안꾸 캐주얼 룩',
    category: '아우터',
    link: 'https://dub.sh/musinsa-look5',
    image: look5,
    alt: '그린 블루종과 후드, 데님을 매치한 남성 코디',
  },
]

const slides = [
    {
    eyebrow: 'YOUR EVERYDAY LOOK',
    title: '오늘의 온도에\n어울리는 옷',
    description: '좋은 소재와 편안한 핏,\n오래 입을수록 마음에 드는 옷',
    image: look2,
  },
  {
    eyebrow: 'A QUIET WINTER',
    title: '깔끔하게\n입고 싶은 날',
    description: '출근부터 주말 약속까지,\n그대로 따라 입는 코디',
    image: look4,
  },

  {
    eyebrow: 'NEW SEASON, NEW MOOD',
    title: '가을을 완성하는\n작은 차이',
    description: '매일 손이 가는 기본 아이템,\n지금 가장 좋은 가격으로',
    image: look1,
  },
]

const navigation = ['아우터', '상의', '하의', '신발/악세사리', '오늘출발', '코디 모음', '베스트셀러', '숨은 키 +5cm', '커뮤니티']

function SearchIcon() {
  return (
    <svg
      className="h-[19px] w-[19px] fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      className="h-[19px] w-[19px] fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.3" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg
      className="h-[19px] w-[19px] fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

function HeartIcon({ filled = false }) {
  return (
    <svg
      className={`h-4 w-4 fill-none stroke-[#393632] [stroke-width:1.4] ${filled ? 'fill-[#8c4e43] stroke-[#8c4e43]' : ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.6Z" />
    </svg>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState('코디 모음')
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')
  const slide = slides[activeSlide]
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === '코디 모음' ||
      activeCategory === '오늘출발' ||
      activeCategory === '베스트셀러' ||
      activeCategory === '커뮤니티' ||
      product.category === activeCategory
    const matchesSearch = `${product.name} ${product.detail}`.includes(search.trim())
    return matchesCategory && matchesSearch
  })

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  const changeSlide = (direction) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)
  }

  const toggleFavorite = (name) => {
    const isFavorite = favorites.includes(name)
    setFavorites((current) =>
      isFavorite ? current.filter((item) => item !== name) : [...current, name],
    )
    showNotice(isFavorite ? '찜 목록에서 삭제했어요.' : '찜 목록에 담았어요.')
  }

  const handleProductClick = (event, product) => {
    event.preventDefault()

    const navigateToProduct = () => window.location.assign(product.link)
    if (typeof window.gtag !== 'function') {
      navigateToProduct()
      return
    }

    let hasNavigated = false
    const continueNavigation = () => {
      if (hasNavigated) return
      hasNavigated = true
      window.clearTimeout(navigationTimeout)
      navigateToProduct()
    }
    const navigationTimeout = window.setTimeout(continueNavigation, 1000)

    window.gtag('event', 'select_item', {
      item_list_name: 'Weekend Lookbook',
      link_url: product.link,
      item_id: product.name.toLowerCase().replace(/\s+/g, '_'),
      item_name: product.name,      // 이 매개변수들이 실시간 보고서에 바로 뜹니다
      item_category: product.category,
      event_callback: continueNavigation,
      event_timeout: 800,
    })
  }

  return (
    <div className="mx-auto w-[calc(100%-48px)] max-w-[1160px] max-[760px]:w-[calc(100%-32px)] max-[390px]:w-[calc(100%-24px)]">
      <header className="relative z-10 bg-white">
        <div className="relative grid min-h-[65px] grid-cols-[1fr_minmax(260px,420px)_1fr] items-center border-b border-[#efeeec] max-[760px]:min-h-[58px] max-[760px]:grid-cols-[1fr_auto]">
          <a
            className="inline-flex translate-x-[58px] flex-col justify-self-center text-lg leading-[1.15] tracking-[-0.5px] text-[#242321] no-underline max-[760px]:translate-x-0 max-[760px]:justify-self-start"
            href=""
            aria-label="홈"
          >
            <span className="font-serif text-[23px] font-medium italic tracking-[-1px]">
              데일리룩
            </span>
          </a>
          <form
            className="flex h-8 items-center border-b border-[#b9b6b2] max-[760px]:col-span-2 max-[760px]:row-start-2 max-[760px]:mb-3"
            role="search"
            onSubmit={(event) => {
              event.preventDefault()
              document.querySelector('#weekly-picks')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <input
              className="w-full min-w-0 border-0 bg-transparent px-2 py-[5px] text-xs text-[#383633] outline-none placeholder:text-[#aaa6a0]"
              aria-label="상품 검색"
              placeholder="찾으시는 상품을 검색해보세요"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="grid h-[30px] w-8 place-items-center" type="submit" aria-label="검색">
              <SearchIcon />
            </button>
          </form>
          <div className="relative col-start-3 flex items-center justify-self-end gap-4 pr-[10px] max-[760px]:col-start-2 max-[760px]:row-start-1 max-[760px]:pr-0">
            <button
              className="grid h-[30px] w-[22px] place-items-center"
              type="button"
              aria-label="로그인"
              onClick={() => showNotice('로그인 후 이용할 수 있어요.')}
            >
              <UserIcon />
            </button>
            <button
              className="relative grid h-[30px] w-[22px] place-items-center"
              type="button"
              aria-label={`장바구니 ${cartCount}개`}
              onClick={() => showNotice(`장바구니에 상품 ${cartCount}개가 있어요.`)}
            >
              <BagIcon />
              {cartCount > 0 && (
                <span className="absolute -right-[7px] top-0 grid h-[15px] min-w-[15px] place-items-center rounded-full bg-[#383633] px-[3px] text-[9px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        <nav className="flex min-h-[42px] items-center gap-7 border-b border-[#e8e6e3] max-[760px]:min-h-10 max-[760px]:gap-4" aria-label="상품 카테고리">
          <button
            className="grid h-[30px] w-[22px] shrink-0 place-items-center gap-1"
            type="button"
            aria-label="메뉴 열기"
            onClick={() => showNotice('카테고리를 선택해 둘러보세요.')}
          >
            <span className="h-px w-[15px] bg-[#302f2c]" />
            <span className="h-px w-[15px] bg-[#302f2c]" />
            <span className="h-px w-[15px] bg-[#302f2c]" />
          </button>
          <div className="flex flex-1 items-center justify-between gap-4 max-[760px]:justify-start max-[760px]:gap-[22px] max-[760px]:overflow-x-auto max-[760px]:[scrollbar-width:none] max-[760px]:[&::-webkit-scrollbar]:hidden">
            {navigation.map((item) => (
              <button
                className={`relative flex items-center min-h-[42px] shrink-0 place-items-center whitespace-nowrap text-[11px] tracking-[-0.35px] text-[#44413d] max-[760px]:min-h-10 max-[760px]:text-[10px] ${activeCategory === item ? "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-[#292724] after:content-['']" : ''}`}
                key={item}
                type="button"
                onClick={() => {
                  setActiveCategory(item)
                  document.querySelector('#weekly-picks')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item === '오늘출발' && <span className="mr-1 text-xs text-[#e56435]">♨</span>}
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative h-[clamp(270px,29vw,350px)] overflow-hidden bg-[#b6b3ae] bg-cover bg-center bg-[position:center_43%] text-white max-[760px]:h-[clamp(280px,65vw,390px)] max-[760px]:bg-[position:58%_center] max-[390px]:h-[270px]"
          aria-label="이번 시즌 추천 스타일"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(33, 30, 28, .45), rgba(33, 30, 28, .05) 72%), url("${slide.image}")`,
          }}
        >
          <div
            className="absolute left-[clamp(28px,8vw,100px)] top-1/2 -translate-y-1/2 animate-[fade-in_350ms_ease_both] [text-shadow:0_1px_14px_rgb(0_0_0_/_12%)] max-[760px]:left-[25px]"
            key={activeSlide}
          >
            <p className="mb-[9px] text-[10px] font-medium tracking-[2.8px] max-[390px]:text-[8px]">
              {slide.eyebrow}
            </p>
            <h1 className="flex flex-col font-serif text-[clamp(32px,4vw,48px)] font-medium leading-[1.3] tracking-[-1.7px] max-[760px]:text-[clamp(30px,7vw,42px)] max-[390px]:text-[28px]">
              {slide.title.split('\n').map((line) => <span key={line}>{line}</span>)}
            </h1>
            <p className="my-[17px] mb-[23px] flex flex-col gap-[3px] font-serif text-sm leading-[1.65] text-white/90 max-[760px]:text-xs">
              {slide.description.split('\n').map((line) => <span key={line}>{line}</span>)}
            </p>
            <button
              className="flex items-center gap-3 bg-transparent p-0 text-xs text-white"
              type="button"
              onClick={() => {
                setActiveCategory('코디 모음')
                document.querySelector('#weekly-picks')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              코디 모아보기
              <span className="text-[17px] transition-transform duration-[180ms] hover:translate-x-1" aria-hidden="true">→</span>
            </button>
          </div>
          <button
            className="absolute left-8 top-1/2 grid h-14 w-[42px] -translate-y-1/2 place-items-center font-serif text-[42px] font-light leading-none text-white/90 transition-colors hover:text-white max-[760px]:left-1"
            type="button"
            aria-label="이전 배너"
            onClick={() => changeSlide(-1)}
          >
            ‹
          </button>
          <button
            className="absolute right-8 top-1/2 grid h-14 w-[42px] -translate-y-1/2 place-items-center font-serif text-[42px] font-light leading-none text-white/90 transition-colors hover:text-white max-[760px]:right-1"
            type="button"
            aria-label="다음 배너"
            onClick={() => changeSlide(1)}
          >
            ›
          </button>
          <div className="absolute bottom-[17px] left-1/2 flex -translate-x-1/2 gap-[7px]" aria-label="배너 선택">
            {slides.map((item, index) => (
              <button
                className={`h-1 w-7 transition-colors duration-[180ms] ${activeSlide === index ? 'bg-white' : 'bg-white/45'}`}
                key={item.eyebrow}
                type="button"
                aria-label={`${index + 1}번 배너`}
                aria-current={activeSlide === index ? 'true' : undefined}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </section>

        <section className="py-[35px] pb-14 max-[760px]:py-[30px] max-[760px]:pb-10" id="weekly-picks">
          <div className="mb-6 text-center">
            <p className="mb-1 text-[9px] tracking-[2px] text-[#9c8c7c]">WEEKEND LOOKBOOK</p>
            <h2 className="m-0 text-[19px] font-semibold tracking-[-0.7px] text-[#292826]">
              {activeCategory === '코디 모음' ? '이번 주말 뭐 입지?' : `${activeCategory} 추천 아이템`}
            </h2>
            <p className="my-2 mb-1 text-[11px] text-[#8d8984]">
              {search ? `'${search}' 검색 결과를 확인해보세요.` : '약속에 맞는 코디로 옷 고민 없이 준비하세요.'}
            </p>
            <button
              className="inline-flex items-center gap-[6px] border-0 border-b border-[#a7a29b] bg-transparent px-0 pb-0.5 text-[10px] text-[#716d67]"
              type="button"
              onClick={() => {
                setActiveCategory('코디 모음')
                setSearch('')
              }}
            >
              코디 모음 보러가기
              <span className="text-[13px] transition-transform duration-[180ms] hover:translate-x-1" aria-hidden="true">→</span>
            </button>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid w-full grid-cols-5 gap-[14px] max-[760px]:grid-cols-2 max-[760px]:gap-x-3 max-[760px]:gap-y-[22px]">
              {visibleProducts.map((product) => {
                const isFavorite = favorites.includes(product.name)
                return (
                  <article className="group relative min-w-0 text-left" key={product.name}>
                    <a
                      className="absolute inset-0 z-[1] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a8066]"
                      href={product.link}
                      aria-label={`${product.name} 상품 자세히 보기`}
                      onClick={(event) => handleProductClick(event, product)}
                    />
                    <div className="relative aspect-[0.68] overflow-hidden bg-[#eeece8]">
                      <img
                        className="h-full w-full object-cover transition-transform duration-[450ms] [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
                        src={product.image}
                        alt={product.alt}
                        loading="lazy"
                      />
                      <button
                        className="absolute right-[9px] top-[9px] z-10 grid h-[29px] w-[29px] place-items-center rounded-full bg-white/90 opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100 focus-visible:opacity-100 max-[760px]:opacity-100"
                        type="button"
                        aria-label={isFavorite ? `${product.name} 찜 취소` : `${product.name} 찜하기`}
                        onClick={() => toggleFavorite(product.name)}
                      >
                        <HeartIcon filled={isFavorite} />
                      </button>
                      <button
                        className="absolute bottom-2 left-2 right-2 z-10 translate-y-[5px] bg-white/90 px-[5px] py-[9px] text-[11px] text-[#292826] opacity-0 transition-[opacity,transform] duration-[180ms] group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 max-[760px]:bottom-[6px] max-[760px]:left-[6px] max-[760px]:right-[6px] max-[760px]:translate-y-0 max-[760px]:px-1 max-[760px]:py-2 max-[760px]:text-[10px] max-[760px]:opacity-100"
                        type="button"
                        onClick={() => {
                          setCartCount((count) => count + 1)
                          showNotice('장바구니에 담았어요.')
                        }}
                      >
                        장바구니 담기
                      </button>
                    </div>
                    <p className="mb-0.5 mt-2 text-center text-[10px] text-[#89847e]">{product.detail}</p>
                    <h3 className="m-0 text-center text-xs font-medium tracking-[-0.3px] text-[#393632]">{product.name}</h3>
                  </article>
                )
              })}
            </div>
          ) : (
            <p className="px-3 py-12 text-center text-[13px] text-[#87817a]">
              검색 결과가 없어요. 다른 키워드로 검색해보세요.
            </p>
          )}
        </section>
      </main>



      {notice && (
        <div
          className="fixed bottom-6 right-6 z-50 animate-[rise-in_180ms_ease_both] bg-[#292826] px-5 py-[13px] text-xs text-white shadow-[0_8px_28px_rgb(0_0_0_/_15%)]"
          role="status"
        >
          {notice}
        </div>
      )}
    </div>
  )
}

export default App
