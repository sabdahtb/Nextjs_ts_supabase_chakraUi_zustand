import { create } from 'zustand'
import { IThemeState } from '~/types/store'

const useThemeState = create<IThemeState>()((set) => ({
  mode: 'light',
  changeMode: () =>
    set((state) => ({
      mode: state.mode === 'light' ? 'dark' : 'light',
    })),
}))

export default useThemeState
