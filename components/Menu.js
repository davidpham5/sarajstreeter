
export default function Menu ({handleMenu}) {
  return (
    <div className={`flex justify-center rounded-full border-2 border-black w-[64px] h-[64px] relative z-10 ${handleMenu.menuOpen ? '' : ''}`}>
      <button className={handleMenu.menuOpen ? '' : ''} style={{width: '100%',
        height: '100%',
        border: 'none',
        background: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        }}
        onClick={(e) => {
          handleMenu.setMenuOpen(!handleMenu.menuOpen);
        }}>Menu</button>
    </div>
  )
}