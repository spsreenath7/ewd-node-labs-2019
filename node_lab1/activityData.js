import actsModel from './api/activities/actsModel';

const acts = [
         {
           title: 'India - Tiger population sees 30% increase.',
           link: 'http://www.bbc.com/news/world-asia-30896028',
           username: 'jbloggs',
           catogery: "politics",
           privacy: "high"
          },
         {
           
            title: 'The button that is not.',
            link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username: 'notme',
            catogery: "politics",
            privacy: "high"
          },
          {
            
            title: 'Google Nears $1B Investment in SpaceX',
            link: null,
            username: 'notme',
            catogery: "politics",
            privacy: "high"
          },
          {
            
            title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link: 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
            username: 'psmith',
            catogery: "politics",
            privacy: "high"
          },
      ];
export const loadActs = () => {
    actsModel.find({}).remove(function() {
        actsModel.collection.insert(acts, (err, docs)=>{
    if (err) {
      console.log(`failed to Load activity Data`);
    } else {
      console.info(`${acts.length} acts were successfully stored.`);
    }
  });
});
};