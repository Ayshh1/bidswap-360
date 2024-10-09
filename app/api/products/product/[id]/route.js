import db from "@/lib/db";
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  const { id } = params;
  const url = new URL(request.url);
  const serviceTypeQuery = url.searchParams.get('serviceType');
  const searchText = url.searchParams.get('query');

  try {
    // Check if `id` is provided and if it's a valid ObjectId
    if (id && ObjectId.isValid(id)) {
      // Fetch a specific product by ID
      const product = await db.product.findUnique({
        where: { id: new ObjectId(id) }, // Ensure the ID is a valid ObjectId
        include: {
          category: true,
          bids: true,
          serviceType: true,
        },
      });

      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }

      return NextResponse.json(product);

    } else if (serviceTypeQuery) {
      // Search by serviceType
      const serviceType = await db.serviceType.findFirst({
        where: {
          name: { equals: serviceTypeQuery, mode: 'insensitive' },
        },
      });

      if (serviceType) {
        const products = await db.product.findMany({
          where: {
            serviceTypeId: serviceType.id,
            bids: {
              some: {
                expiresAt: {
                  gt: new Date(), // Only include non-expired bids
                },
              },
            },
          },
          include: {
            category: true,
            serviceType: true,
            bids: {
              where: {
                expiresAt: {
                  gt: new Date(), // Only include non-expired bids in the response
                },
              },
            },
          },
        });

        if (products.length === 0) {
          return NextResponse.json({ message: 'No products found for the given service type' }, { status: 404 });
        }

        return NextResponse.json(products);
      } else {
        return NextResponse.json({ message: 'Service type not found' }, { status: 404 });
      }

    } else if (searchText) {
      // Search by product name, description, or category
      const products = await db.product.findMany({
        where: {
          OR: [
            { name: { contains: searchText, mode: 'insensitive' } },
            { description: { contains: searchText, mode: 'insensitive' } },
            {
              category: {
                name: { contains: searchText, mode: 'insensitive' },
              },
            },
          ],
        },
        include: {
          category: true,
          bids: true,
          serviceType: true,
        },
      });

      if (products.length === 0) {
        return NextResponse.json({ message: 'No products found for the search query' }, { status: 404 });
      }

      return NextResponse.json(products);

    } else if (minprice || maxprice) {
      // Convert prices to numbers for comparison
      const parsedMinPrice = minprice ? parseFloat(minprice) : 0;
      const parsedMaxPrice = maxprice ? parseFloat(maxprice) : Infinity;

      // Fetch products within the price range
      const products = await db.product.findMany({
        where: {
          saleprice: {
            gte: parsedMinPrice,
            lte: parsedMaxPrice,
          }
        },
        include: {
          category: true,
          bids: true,
          serviceType: true
        }
      });

      if (products.length === 0) {
        return NextResponse.json({ message: 'No products found within the price range' }, { status: 404 });
      }

      return NextResponse.json(products);

      // Search by serviceType
    }else {
      // Fetch all products if no query is provided
      const products = await db.product.findMany({
        include: {
          category: true,
          bids: true,
          serviceType: true,
        },
      });

      return NextResponse.json(products);
    }

  } catch (error) {
    console.error('Error Fetching product:', error);
    return NextResponse.json({
      message: 'Unable to fetch product',
      error: error.message || 'Unknown error',
    }, { status: 500 });
  }
}
