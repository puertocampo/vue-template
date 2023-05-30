import { defineStore } from 'pinia'
import { IArticle } from '@/types';
import { getWpArticles } from '@/services/service';

// defineStore 関数を用いてストアを作成する
// 第一引数 "articles" はアプリケーション全体でストアを特定するためのユニークキー
export const useArticleStore = defineStore("articles", {
  // State は初期値を返す関数を定義する
  state: () => {
    return {
      articles: [] as IArticle[],
    };
  },
  // getters は state 及び他の getter へのアクセスが可能
  // getter は全て computed 扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    // filterArticles(state) {
    //   return (filterArticleName: string): IArticle[] => {
    //     const filteredArticles = state.articles.filter(
    //         (article) => article.slug.indexOf(filterArticleName) >= 0
    //       );
    //       return filteredArticles;
    //   };
    // }
  },
  // mutations が存在しないので、State の更新は全て actions で行う
  actions: {
    async fetchArticles() {
        const articles: IArticle[] = await getWpArticles();
        this.articles.push(...articles);
    },
  },
});