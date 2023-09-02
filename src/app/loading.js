import './appStyle/loading.scss'
import Header from '@/components/Header/Header'

export default function Loading() {
  return (
    <div className='loadingcontainer'>
        <Header />
        <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
  )
}