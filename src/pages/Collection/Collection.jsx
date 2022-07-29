import React, { useEffect, useState } from "react";
import Card from "../../containers/Card";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import {
  CollectionContainer,
  MockImage,
  EmptyCollectionContainer,
  EmptyTitle,
} from "./styled";
import noElementsImage from "../../assets/images/svg/father-and-daughter.svg";
import {
  collectionSelector,
  CollectionItemStatusSelector,
  CollectionItemErrorSelector,
  DeletedCollectionItemErrorSelector,
  DeletedCollectionItemStatusSelector,
  DeletedCollectionItemItemDetail,
} from "../../store/ItemsCollection/selectors";
import { allCollectionsSelector } from "../../store/Collections/selectors";
import { fetchItems } from "../../store/ItemsCollection/reducer";
import { fetchCollections } from "../../store/Collections/reducer";
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  clearItemCollectionAction,
  clearDeletedItemAction,
} from "../../store/ItemsCollection/actions";
import { ToastContainer, toast } from "react-toastify";

function Collection() {
  const collectionItemFetchStatus = useSelector(CollectionItemStatusSelector);
  const mappedCollections = collectionArrayToMap(
      useSelector(allCollectionsSelector)
  );
  const collectionItemFetchError = useSelector(CollectionItemErrorSelector);
  const collectionItems = useSelector(collectionSelector);
  const deletedItemStatus = useSelector(DeletedCollectionItemStatusSelector);
  const deletedItemError = useSelector(DeletedCollectionItemErrorSelector);
  const deletedCollectionItemInfo = useSelector(
      DeletedCollectionItemItemDetail
  );

  const responsedEmptyCollection =
      collectionItemFetchStatus === "resolved" && collectionItems.length === 0;

  const responsedWithValue =
      collectionItemFetchStatus === "resolved" &&
      mappedCollections?.size > 0 &&
      collectionItems.length > 0;

  const dispatch = useDispatch();

  const [fetchItemsPagination, setFetchItemsPagination] = useState({
    page: 1,
    limit: 10,
  });
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    dispatch(clearItemCollectionAction());
    dispatch(fetchItems(fetchItemsPagination));
    setFetchItemsPagination((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      };
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  function collectionArrayToMap(arr) {
    if (arr.length) {
      let mappedCollection = new Map();

      for (let obj of arr) {
        mappedCollection.set(Number(obj.id), {
          label: obj.label,
          value: obj.value,
        });
      }
      return mappedCollection;
    }
  }

  useEffect(() => {
    if (deletedItemStatus === "resolved") {
      successMessageNotify(deletedCollectionItemInfo.title);
    }
    return () => {
      dispatch(clearDeletedItemAction());
    };
  }, [deletedItemStatus]);

  function loadMoreCollectionData() {
    if (collectionItems.length !== 0) {
      setFetchItemsPagination((prev) => {
        return {
          ...prev,
          page: prev.page + 1,
        };
      });
      dispatch(fetchItems(fetchItemsPagination)).then((data) => {
        if (data.payload.length === 0) {
          setLoadMore(false);
        }
      });
    }
  }

  const successMessageNotify = (item) => {
    toast.success(`${item} was succesfully deleted!`, {
      position: "top-center",
      autoClose: 5000,
    });
  };
  const errorMessageNotify = () => {
    toast("Wow so easy !");
  };


  if (collectionItemFetchStatus === "loading") {
    return <Loader/>;
  }
  if (responsedEmptyCollection) {
    return (
        <EmptyCollectionContainer>
          <MockImage src={noElementsImage} alt=""/>
          <EmptyTitle>Your collection is empty...</EmptyTitle>
        </EmptyCollectionContainer>
    );
  }
  if (collectionItemFetchError) {
    return <PageTitle>An error occured: {collectionItemFetchError}</PageTitle>;
  }
  if (responsedWithValue) {
    return (
        <CollectionContainer>
          <InfiniteScroll
              dataLength={collectionItems.length}
              next={loadMoreCollectionData}
              hasMore={loadMore}
              loader={<Loader/>}
              style={{display: "flex", gap: "20px", flexWrap: "wrap"}}
          >
            {collectionItems.map((item) => {
              return (
                  <Card
                      price={item.price}
                      collection={mappedCollections.get(item.collection).label}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                  />
              );
            })}
          </InfiniteScroll>
          <ToastContainer/>
        </CollectionContainer>
    );
  }
}
 
export default Collection;
