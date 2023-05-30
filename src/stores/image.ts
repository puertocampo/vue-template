import { defineStore } from 'pinia'
import { IImage } from '@/types';
import { getWpImages } from '@/services/service';

// defineStore 関数を用いてストアを作成する
// 第一引数 "images" はアプリケーション全体でストアを特定するためのユニークキー
export const useImageStore = defineStore("images", {
  // State は初期値を返す関数を定義する
  state: () => {
    return {
      images: [] as IImage[],
    };
  },
  // getters は state 及び他の getter へのアクセスが可能
  // getter は全て computed 扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    filterImages(state) {
      return (filterImageName: string): IImage[] => {
        const filteredImages = state.images.filter(
            (image) => image.slug.indexOf(filterImageName) >= 0
          );
          return filteredImages;
      };
    }
  },
  // mutations が存在しないので、State の更新は全て actions で行う
  actions: {
    async fetchImages() {
        const images: IImage[] = await getWpImages();
        this.images.push(...images);
    },
  },
});