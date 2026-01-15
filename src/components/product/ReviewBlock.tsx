
export default function ReviewBlock() {
    const reviews = [
        {
            id: 1,
            author: 'David M.',
            date: 'May 12, 2024',
            rating: 5,
            title: 'Best Flagpole I have ever owned',
            content: 'I have had many flagpoles over the years. This Phoenix telescoping pole is by far the highest quality. No ropes to mess with and it stands tall even in heavy winds. Highly recommend!',
            verified: true,
        },
        {
            id: 2,
            author: 'Sarah J.',
            date: 'April 28, 2024',
            rating: 5,
            title: 'Veteran Owned Quality',
            content: 'Love supporting a veteran owned business. The customer service was excellent and the delivery was fast. The pole looks amazing in my front yard.',
            verified: true,
        },
        {
            id: 3,
            author: 'Robert K.',
            date: 'March 15, 2024',
            rating: 5,
            title: 'Easy to install',
            content: 'The installation instructions were very clear. I had the ground sleeve set and the pole up in no time. The locking mechanism is very secure.',
            verified: true,
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold text-navy tracking-tighter mb-2">Verified Patriot Reviews</h2>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-navy/60 font-bold">4.9 AVERAGE RATING</span>
                            </div>
                        </div>
                        <button className="px-8 py-4 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all">
                            Write A Review
                        </button>
                    </div>

                    <div className="space-y-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-lg">
                                            {review.author[0]}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-navy">{review.author}</span>
                                                {review.verified && (
                                                    <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                        Verified Buyer
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-navy/40 font-medium">{review.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-2">{review.title}</h4>
                                <p className="text-navy/70 leading-relaxed italic">"{review.content}"</p>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-12 py-4 text-navy/40 font-bold hover:text-navy transition-colors flex items-center justify-center gap-2">
                        Load More Reviews
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
