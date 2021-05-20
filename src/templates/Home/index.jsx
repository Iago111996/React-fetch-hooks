import { Component } from 'react';

import './styles.css';


import { Posts } from '../../components/posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button/index'
import { TextInput } from '../../components/Textnput';

class Home extends Component {
   state = {
       posts: [],
       allposts: [],
       page: 0,
       postsPerPage: 12,
       searchValeu: '',
   }

   async componentDidMount() {
    await this.loadPosts();
   }

   loadPosts = async () => {
      const {page, postsPerPage} = this.state;

        const postsAndPhotos = await loadPosts();

       this.setState({ 
            posts: postsAndPhotos.slice(page,postsPerPage),
            allposts: postsAndPhotos,
         });
   }
   

   loadMorePost = () => {
        const {
            page,
            postsPerPage,
            posts,
            allposts
        } = this.state;

        const nextPage = page + postsPerPage;
        const nextPosts = allposts.slice(nextPage,  nextPage + postsPerPage);
    
        
        posts.push(...nextPosts);

        this.setState({posts, page: nextPage});
   }

   hendleChange = (e) => {
        const { value } = e.target;

        this.setState({ searchValeu: value });
   }



    render() {
        const { posts, page, postsPerPage, allposts, searchValeu, } = this.state;
        const noMorePosts = page + postsPerPage >= allposts.length;
        const flitedPsots = !!searchValeu 
        ? allposts.filter(post => {
            return post.title.toLowerCase().includes(searchValeu.toLowerCase());
        }) 
        : posts;
        return (
            <section className="container">
             
                <div className="search">
                 <TextInput  searchValeu={searchValeu} hendleChange={this.hendleChange} />
                 {!!searchValeu &&(
                    <div>
                        <h1>
                            Search value: {searchValeu}
                        </h1>
                    </div>
                )}
                </div>

                {flitedPsots.length > 0 &&(
                    <Posts posts={flitedPsots} />
                )}
                 {flitedPsots.length === 0 &&(
                    <h3>Não há postes</h3>
                )}
                
                <div className="button-container">
                    {!searchValeu &&(
                        <Button 
                        text={'load moe'}
                        onClick={this.loadMorePost}
                        disabled={noMorePosts}
                        />
                    )}
                </div>
            </section>
          );
    }
}

export default Home;

