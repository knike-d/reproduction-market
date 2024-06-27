"use client";
import { useId, useState } from "react";
import type { AreaSelect, City } from "@/model/location/location.type";
import { useFetchAreaSelectLocation } from "@/model/location/useFetchLocation.hook";
import { SearchFormButton } from "@/model/service/SearchForm/SearchFormButton";
import { RightArrowIcon } from "@/utils/ui/Icon/RightArrowIcon";
import { AbsoluteOverlay } from "@/utils/ui/overlay/AbsoluteOverlay";
import { DetailDrawer } from "@/utils/ui/overlay/Drawer/DetailDrawer";
import { useDetailDrawer } from "@/utils/ui/overlay/Drawer/useDetailDrawer.hook";
import { BottomModal } from "@/utils/ui/overlay/Modal/BottomModal";
import { useOverlayContent } from "@/utils/ui/overlay/useOverlayContent.hook";

type SelectedArea = {
  prefecture: AreaSelect.Prefecture;
  city: City;
};

export const AreaSearchForm = () => {
  const id = useId();
  const modalId = `modal-${id}`;
  const citiesDrawerId = `cities-drawer-${id}`;

  const { data } = useFetchAreaSelectLocation();

  const { isOpen: isModalOpen, handleOverlayOpen, handleOverlayClose, overlayContentsRef } = useOverlayContent();
  const { isOpen: isCityDrawerOpen, handleDrawerOpen, handleDrawerClose, drawerRef } = useDetailDrawer();

  const [selectedArea, setSelectedArea] = useState<SelectedArea>();
  const [tempSelectedArea, setTempSelectedArea] = useState<Partial<SelectedArea>>();

  const handleAreaSelectCancel = (): void => {
    setTempSelectedArea(selectedArea);
    if (selectedArea) {
      if (!isCityDrawerOpen) handleDrawerOpen();
    } else {
      if (isCityDrawerOpen) handleDrawerClose();
    }
    handleOverlayClose();
  };

  const handleCitiesSelectCancel = (): void => {
    handleDrawerClose();
    setTempSelectedArea(undefined);
  };

  const handlePrefSelect = (prefecture: AreaSelect.Prefecture): void => {
    setTempSelectedArea({ prefecture });
    handleDrawerOpen();
  };

  const handleCitySelect = (city: City): void => {
    if (!tempSelectedArea?.prefecture) {
      handleDrawerClose();
      setTempSelectedArea(undefined);
      alert("都道府県が選択されていません");
      return;
    }
    setTempSelectedArea((prev) => ({ ...prev, city }));
    setSelectedArea({ prefecture: tempSelectedArea.prefecture, city });
    handleOverlayClose();
  };

  return (
    <>
      <SearchFormButton aria-controls={modalId} isOpen={isModalOpen} onOpen={handleOverlayOpen}>
        <div className="flex">
          <span className="w-20">エリア: </span>
          {selectedArea ? (
            `${selectedArea.prefecture.name} ${selectedArea.city.name}`
          ) : (
            <span className="text-gray-400">エリアを選択</span>
          )}
        </div>
      </SearchFormButton>
      <BottomModal ref={overlayContentsRef} contentsId={modalId} isOpen={isModalOpen} onClose={handleAreaSelectCancel}>
        <p className="pl-4 text-lg">エリアを選択</p>
        <div className="relative flex size-full overflow-y-auto p-4">
          <div
            className={`w-full ${tempSelectedArea?.prefecture ? "overflow-hidden" : "overflow-y-auto overscroll-y-contain"}`}
          >
            <div className="relative">
              <AbsoluteOverlay isOpen={isCityDrawerOpen} onClose={handleCitiesSelectCancel} />
              {data.map((el) => {
                return (
                  <div key={el.id} className="w-full">
                    <p className="sticky top-0 z-10 w-full bg-gray-300 px-2 font-bold">{el.region}</p>
                    {el.prefectures.map((pref) => {
                      const isSelected = pref.id === tempSelectedArea?.prefecture?.id;
                      return (
                        <button
                          key={pref.kana}
                          aria-controls={citiesDrawerId}
                          aria-label={isSelected ? "都道府県選択に戻る" : undefined}
                          className={`relative flex h-12 w-full items-center justify-between whitespace-nowrap border-x border-t px-4 text-left last:border-b ${isSelected ? "z-overlay-content border-r-0 bg-green-300" : ""}`}
                          disabled={!!tempSelectedArea?.prefecture && !isSelected}
                          type="button"
                          onClick={isCityDrawerOpen ? handleCitiesSelectCancel : () => handlePrefSelect(pref)}
                        >
                          {pref.name}
                          <RightArrowIcon
                            className={`transition-transform duration-200 ${isSelected ? "-rotate-180" : ""}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <DetailDrawer
            ref={drawerRef}
            drawerContentsId={citiesDrawerId}
            isOpen={isCityDrawerOpen}
            onClose={handleCitiesSelectCancel}
          >
            {tempSelectedArea?.prefecture?.groupedCities.map(({ columnName, cities }) => (
              <div key={columnName} className="w-full">
                <p className="sticky top-0 z-10 w-full bg-gray-300 px-2 font-bold">{columnName}</p>
                {cities.map((city) => (
                  <button
                    key={city.id}
                    className={`flex h-12 w-full items-center justify-between whitespace-nowrap border-r border-t px-4 text-left ${city.id === tempSelectedArea?.city?.id ? "bg-green-300" : ""}`}
                    type="button"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            ))}
          </DetailDrawer>
        </div>
      </BottomModal>
    </>
  );
};
