import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only update your own listings!'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
// export const getListings = async (req, res, next) => {
//   try {
//     const limit = parseInt(req.query.limit) || 9;
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     let offer = req.query.offer;
//     if (offer === undefined || offer === 'false') {
//       offer = { $in: [false, true] };
//     }
//     let refurbished = req.query.refurbished;
//     if (refurbished === undefined || refurbished === 'false') {
//       refurbished = { $in: [false, true] };
//     }

//     let warranty = req.query.warranty;
//     if (warranty === undefined || warranty === 'false') {
//       warranty = { $in: [false, true] };
//     }
//     let type = req.query.type;
//     if (type === undefined || type === 'all') {
//       type = { $in: ['sale', 'rent'] };
//     }
//     const searchTerm = req.query.searchTerm || '';
//     const sort = req.query.sort || 'createdAt';
//     const order = req.query.order || 'desc';
//     const listings = await Listing.find({
//       name: { $regex: searchTerm, $options: 'i' },
//       offer,
//       refurbished,
//       warranty,
//       type,
//     })
//       .sort({ [sort]: order })
//       .limit(limit)
//       .skip(startIndex);
//     return res.status(200).json(listings);
//   } catch (error) {
//     next(error);
//   }
// };


export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    let offer = req.query.offer === 'true' ? true : req.query.offer === 'false' ? false : { $in: [false, true] };
    let refurbished = req.query.refurbished === 'true' ? true : req.query.refurbished === 'false' ? false : { $in: [false, true] };
    let warranty = req.query.warranty === 'true' ? true : req.query.warranty === 'false' ? false : { $in: [false, true] };
    let type = req.query.type && ['sale', 'rent'].includes(req.query.type) ? req.query.type : { $in: ['sale', 'rent'] };

    const searchTerm = req.query.searchTerm || '';
    
    const allowedSortFields = ['createdAt', 'price', 'name'];
    const sort = allowedSortFields.includes(req.query.sort) ? req.query.sort : 'createdAt';
    const order = req.query.order === 'asc' ? 1 : -1;

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: 'i' },
      offer,
      refurbished,
      warranty,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};