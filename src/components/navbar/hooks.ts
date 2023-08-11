import { useRouter, usePathname } from 'next/navigation'

interface INavbar {
  title: string
  path: string
}

export function useNavbar() {
  const router = useRouter()
  const pathName = usePathname()

  function gotoPage(path: string) {
    router.push(path)
  }

  const navList: INavbar[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Admin',
      path: '/admin',
    },
  ]

  return {
    datas: {
      navList,
      pathName,
    },
    methods: {
      gotoPage,
    },
  }
}
