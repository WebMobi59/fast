const GetStartEnties = [
    {
        image: require('../assets/images/get_started_first.png'),
        logoText: 'FAST',
        title: 'Get Started',
        description: 'No more waiting outside the restaurant for available table.',
        color: '#78B9EB'
    },
    {
        image: require('../assets/images/get_started_scan.png'),
        logoText: '',   
        title: 'Scan It!',
        description: 'Scan to take Queue Number and Order your food thru FastApp!',
        color: '#2485D0'
    },
    {
        image: require('../assets/images/get_started_nearby.png'),
        logoText: '',
        title: 'Near Me',
        description: 'Search for nearby delicious foods and check for their queue time and rating!',
        color: '#0168B8'
    },
    {
        image: require('../assets/images/get_started_bill.png'),
        logoText: '',
        title: 'View Bill',
        description: 'View your bill before you proceed to make payment thru the app.',
        color: '#13508A'
    }
]

const Promotions = [
    {
        image: require('../assets/images/home_ongoing_first.png'),
        title: 'Subway Buy 1 Get 1 Free Promotion',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    },
    {
        image: require('../assets/images/home_ongoing_second.png'),
        title: 'Crystal Jade $8.80 Lunch Set',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    }
]

const Suggestions = [
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Sushi Palace',
        category: 'Japanese Cuisine',
        location: '200m, Tampines Mall'
    },
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'Crystal Jade Kitchen',
        category: 'Chinese Cuisine',
        location: '200m, Tampines Mall'
    }
]

const PickEntities = [
    {
        image: require('../assets/images/discover_pick_first.png'),
        title: 'Ya Kung Kaya Toast',
        category: 'Drinks',
        location: '200m, Tampines Mall'
    },
    {
        image: require('../assets/images/discover_pick_second.png'),
        title: 'Songfa Bak Ku teh',
        category: 'Chinese Cuisine',
        location: '3.5km, Clarke Quay'
    }
]

const BloggerEntities = [
    {
        image: require('../assets/images/discover_blogger_first.png'),
        title: 'MANEKO-AFFORDABLE JAPANESE RESTAURANT',
        by: 'LadyIronChef',
        detail: {
            image: require('../assets/images/home_suggestion_first.png'),
            title: 'Sushi Palace',
            location: 'Tampines Mal, #03-15',
            category: 'Japanese Cusine',
            distance: '200m',
            time: '10PM'
        }
    },
    {
        image: require('../assets/images/discover_blogger_second.png'),
        title: 'Shenton Way Golden Bridge Roasted Chicken Rice',
        by: 'Foodking',
        detail: {
            image: require('../assets/images/home_suggestion_first.png'),
            title: 'Sushi Palace',
            location: 'Tampines Mal, #03-15',
            category: 'Japanese Cusine',
            distance: '200m',
            time: '10PM'
        }
    }
]

const Followings = [
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'Crystal Jade Kitchen',
        location: 'Tampines Mall, #03-10',
        category: 'Chinese Cuisine',
        like: true
    },
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Sushi Palace',
        location: 'Tampines Mall, #03-15',
        category: 'Japanese Cuisine',
        like: true
    }
]

const OrderHistories = [
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Crystal Jade Kitchen',
        location: 'Tampines Mall, #03-10',
        date: '5:30PM, Today',
        cost: 15.15,
        payment: 'CASH'
    },
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'SushiPlace',
        location: 'Tampines Mall, #03-15',
        date: '7:30PM, Yesterday',
        cost: 22.35,
        payment: 'PayLah!'
    }
]

const RewardHistories = [
    {
        profile: require('../assets/images/profile.jpg'),
        rating: require('../assets/images/four_rating.png'),
        message: 'Xian Long Bao was Super good! Will come',
        date: '2018-07-09'
    }
]

const BillEntity = {
    image: require('../assets/images/home_suggestion_first.png'),
    title: 'Crystal Jade Kitchen',
    location: 'Tampines Mall, #03-10',
    total_cost: '#13.80',
    orders: [
        {
            image: require('../assets/images/view_order.png'),
            title: 'Herbal Shrimp Wanton',
            descriptions: [
                '1. Herbal Shrimp Wanton less spicy and less chili oil',
                '2. Herbal Shrimp Wanton'
            ],
            count: 2,
            cost: '$13.80'
        }
    ]
}

const NearByEntities = [
    {
        image: require('../assets/images/home_suggestion_first.png'),
        close: '10pm',
        title: 'Crystal Jade Kitchen',
        is_halal: false,
        rating_image: require('../assets/images/four_rating.png'),
        review: 10,
        location: 'Tampines Mall, #03-10',
        category: 'Chinese Cuisine',
        distance: '200',
        time: '10',
        rating: 4,
        description: 'Award Winning Chinese / Cantonese Cuisine Restaurant. One of the best Dim Sums restaurant in the East Region.',
        by: 'tomnguyen',
        message: 'Xiao Long Bao was Super good! Will come back again for dim sum craving.',
        latitude: 23.23425,
        longitude: -124.4234
    },
    {
        image: require('../assets/images/home_suggestion_second.png'),
        close: '10pm',
        title: 'Sushi Palace',
        is_halal: true,
        rating_image: require('../assets/images/five_rating.png'),
        review: 18,
        location: 'Tampines Mall, #03-15',
        category: 'Japanese Cuisine',
        distance: '200',
        time: '25',
        rating: 5,
        description: 'Award Winning Chinese / Cantonese Cuisine Restaurant. One of the best Dim Sums restaurant in the East Region.',
        by: 'tomnguyen',
        message: 'Xiao Long Bao was Super good! Will come back again for dim sum craving.',
        latitude: 63.23425,
        longitude: -104.4234
    }
]

const NotificationEnties = [
    {
        image: require('../assets/images/notification_first.png'),
        date: '29 May',
        title: 'Up to 20% off! Lunar New Year',
        category: 'Dinner Promotion',
        description: 'Valid from 1st June to 30th Auguest 2018*. Available all on outlets!',
        terms: [
            'Valid for Weekend Buffet only',
            'Weekend Lunch (Sat & Sun)',
            'Weekend Dinner (Fri, Sat & Sun)',
            'Valid for adults only, a maximum of 6 persons',
            'Not valid with any other ongoing promotion, offers or loyalty programs'
        ],
        others: [
            'Please present valid SAFRA card in person upon ordering or purchasing of product(s) or service(s).\n All dining offers are strictly for dine-in only, unless otherwise stated.\n',
            'Not valid with other promotions, privileges, discount cards and promotional vouchers, whichever is applicable.\nSAFRA is not an agent of the merchant. Any dispute regarding the quality or service standard must be resolved directly with the respective merchants. SAFRA will not assume any liability or responsibility for the acts of the merchants or any defects in products or services offered in the promotion.\nPrices in non-inclusive of GST & service charge'        
        ]
    },
    {
        image: require('../assets/images/notification_second.png'),
        date: '29 May',
        title: 'Just $8.80 for all La Mian!',
        category: 'Dinner Promotion',
        description: 'Valid from 1st June to 30th Auguest 2018*. Available all on outlets!',
        terms: [
            'Valid for Weekend Buffet only',
            'Weekend Lunch (Sat & Sun)',
            'Weekend Dinner (Fri, Sat & Sun)',
            'Valid for adults only, a maximum of 6 persons',
            'Not valid with any other ongoing promotion, offers or loyalty programs'
        ],
        others: [
            'Please present valid SAFRA card in person upon ordering or purchasing of product(s) or service(s).\n All dining offers are strictly for dine-in only, unless otherwise stated.\n',
            'Not valid with other promotions, privileges, discount cards and promotional vouchers, whichever is applicable.\nSAFRA is not an agent of the merchant. Any dispute regarding the quality or service standard must be resolved directly with the respective merchants. SAFRA will not assume any liability or responsibility for the acts of the merchants or any defects in products or services offered in the promotion.\nPrices in non-inclusive of GST & service charge'        
        ]
    }
]

const RestaurantPromotionEntities = [
    {
        image: require('../assets/images/notification_first.png'),
        title: 'Up to 20% off! Lunar New Year Dinner Promotion',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    },
    {
        image: require('../assets/images/notification_second.png'),
        title: 'Just $8.80 for all La Mian!',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    }
]

const Constants = {
    GetStartEnties,
    Promotions,
    Suggestions,
    Followings,
    OrderHistories,
    RewardHistories,
    BillEntity,
    NearByEntities,
    PickEntities,
    BloggerEntities,
    NotificationEnties,
    RestaurantPromotionEntities
}

export default Constants