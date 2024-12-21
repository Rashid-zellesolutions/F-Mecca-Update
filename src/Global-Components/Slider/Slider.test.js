import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from './Slider';

// Mock images and assets
jest.mock('../../Assets/slider-images/slider-image-1.png', () => 'imageOne');
jest.mock('../../Assets/slider-images/slider-image-2.png', () => 'imageTwo');
jest.mock('../../Assets/slider-images/slider-image-3.png', () => 'imageThree');
jest.mock('../../Assets/slider-images/sofa3.png', () => 'smallSizeImageOne');
jest.mock('../../Assets/slider-images/sofa1.png', () => 'smallSizeImageTwo');
jest.mock('../../Assets/slider-images/sofa2.png', () => 'smallSizeImageThree');
jest.mock('../../Assets/icons/arrow-left.png', () => 'ArrowLeft');
jest.mock('../../Assets/icons/arrow-right.png', () => 'ArrowRight');
jest.mock('../../Assets/icons/arrow-left-red.png', () => 'arrowLeftRed');
jest.mock('../../Assets/icons/arrow-right-red.png', () => 'arrowRightRed');

describe('Slider Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('renders without crashing', () => {
    render(<Slider />);
    expect(screen.getByAltText('slide 1')).toBeInTheDocument();
  });

  test('displays the initial slide', () => {
    render(<Slider />);
    expect(screen.getByAltText('slide 1')).toBeInTheDocument();
  });

  test('renders left and right arrow images', () => {
    render(<Slider />);
    expect(screen.getByAltText('arrow left')).toBeInTheDocument();
    expect(screen.getByAltText('arrow right')).toBeInTheDocument();
  });

  test('automatically advances slides every 3 seconds', () => {
    render(<Slider />);
    expect(screen.getByAltText('slide 1')).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(screen.getByAltText('slide 2')).toBeInTheDocument();
  });

  test('clicking left arrow navigates to the previous slide', () => {
    render(<Slider />);
    fireEvent.click(screen.getByAltText('arrow left'));
    expect(screen.getByAltText('slide 3')).toBeInTheDocument(); // Last slide
  });

  test('clicking right arrow navigates to the next slide', () => {
    render(<Slider />);
    fireEvent.click(screen.getByAltText('arrow right'));
    expect(screen.getByAltText('slide 2')).toBeInTheDocument();
  });

  test('hovering over arrows changes their images', () => {
    render(<Slider />);
    const leftArrow = screen.getByAltText('arrow left');
    const rightArrow = screen.getByAltText('arrow right');

    fireEvent.mouseEnter(leftArrow);
    expect(leftArrow).toHaveAttribute('src', 'arrowLeftRed');

    fireEvent.mouseLeave(leftArrow);
    expect(leftArrow).toHaveAttribute('src', 'ArrowLeft');

    fireEvent.mouseEnter(rightArrow);
    expect(rightArrow).toHaveAttribute('src', 'arrowRightRed');

    fireEvent.mouseLeave(rightArrow);
    expect(rightArrow).toHaveAttribute('src', 'ArrowRight');
  });

  test('slider loops correctly when navigating past the first or last slide', () => {
    render(<Slider />);
    fireEvent.click(screen.getByAltText('arrow left'));
    expect(screen.getByAltText('slide 3')).toBeInTheDocument(); // Last slide

    fireEvent.click(screen.getByAltText('arrow right'));
    fireEvent.click(screen.getByAltText('arrow right'));
    fireEvent.click(screen.getByAltText('arrow right'));
    expect(screen.getByAltText('slide 1')).toBeInTheDocument(); // First slide
  });

  test('renders mobile view slides correctly', () => {
    render(<Slider />);
    expect(screen.getByAltText('slide 1')).toBeInTheDocument();
    expect(screen.getByAltText('slide 2')).toBeInTheDocument();
    expect(screen.getByAltText('slide 3')).toBeInTheDocument();
  });
});
