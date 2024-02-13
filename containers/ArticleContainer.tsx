import CustomPortableText from '@/components/CustomPortableText';
import MarkAsRead from '@/components/MarkAsRead';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import { getArticle } from '@/sanity/sanity-utils';

type Article = { id: string; date: string };
const ArticleContainer = async ({ params }: { params: any }) => {
  let user = await getCurrentUser();
  const article = await getArticle(params.content);

  let read: boolean = false;
  if (user?.contentProgress.articles.some((item: Article) => item.id == article._id)) read = true;
  else read = false;

  const updateUserArticle = async () => {
    'use server';
    if (!read) {
      if ((await getCurrentUser())?.contentProgress.articles.some((item: Article) => item.id == article._id)) return;

      const addArticle = { id: article._id, date: new Date(Date.now()).toISOString() };

      await updateCurrentUser({ data: { contentProgress: { articles: addArticle } } });
    }
  };

  return (
    <div className='px-10 py-14 '>
      <div className='max-w-[688px] mx-auto text-xl'>
        <header className='md:text-left text-5xl md:mt-8 mb-20 font-extrabold'>{article.title}</header>

        <CustomPortableText className='word-spacing tracking-[0.25px]' value={article.content} />

        {/* Read Button */}
        <MarkAsRead updateUserArticle={updateUserArticle} read={read} />
      </div>
    </div>
  );
};

export default ArticleContainer;
