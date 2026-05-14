type Movie ={
    id : number;
    title : string;
    rating : number;
    image : string;
    description?: string;
};

export default function MovieCard({movie} : {movie : Movie}){
    return(
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
            
            <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-64 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
            </div>
        </div>
    );
}