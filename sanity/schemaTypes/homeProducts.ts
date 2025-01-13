
export default {
    name: 'home_products',
    title: 'home Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(3).max(100).error('Name is required and should be between 3 and 100 characters')
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(3).max(150).error('Title is required and should be between 3 and 150 characters')
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => Rule.required().error('Image is required')
        },
        {
            name: 'price_before',
            title: 'Price Before',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(0).error('Price is required and must be a positive number')
        },
        {
            name: 'price_after',
            title: 'Price After',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(0).error('Price is required and must be a positive number')
        }
        
    ]
}
