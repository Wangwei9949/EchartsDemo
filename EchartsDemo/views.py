#!/usr/bin/env python
# encoding: utf-8
'''
@author: wangwei
@license: (C) Copyright 2013-2017, Node Supply Chain Manager Corporation Limited.
@contact: 26260511@qq.com
@software: perseus
@file: views.py
@time: 2019/9/27 4:38 PM
@desc:
'''
from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def getDataPage(request):
    context = {}
    return render(request, 'data.html', context)


def getMapPage(request):
    context = {}
    return render(request, 'Map.html', context)



def updatePage(request):
    pass