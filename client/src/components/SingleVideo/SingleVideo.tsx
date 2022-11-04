import { useParams } from 'react-router-dom';
import SingleVideoContainer from '.';
import { usePostQuery } from '../../operations/queries/Post.generated';


const SingleVideo = () => {

    const { id }: any = useParams();

    const { data, isError } = usePostQuery({ id })
    // const { data: videoPile, isLoading: isVideoPileLoading } = useAllPostsQuery();

    if (isError) {
        return <h1>Error...</h1>
    }

    return <SingleVideoContainer data={data} />
}

export default SingleVideo
